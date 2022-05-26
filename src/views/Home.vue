<script setup>
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { onMounted, ref, watch } from "vue";
import { supabase } from "../supabase.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
ChartJS.defaults.font.family = "Poppins";
ChartJS.defaults.font.weight = 400;
ChartJS.defaults.font.color = "rgb(156 163 175)";
ChartJS.defaults.color = "rgb(156 163 175)";

let chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    barThickness: 8,
    backgroundColor: "#b66cff",
    borderRadius: 3,
    borderSkipped: true,
    minBarLength: 0,
    plugins: {
        legend: {
            display: false,
        },
    },
    events: [],
    scales: {
        x: {
            grid: {
                display: false,
                borderColor: "rgba(0, 0, 0, 0)",
            },
            display: true,
        },
        y: {
            grid: {
                display: false,
                borderColor: "rgba(0, 0, 0, 0)",
            },
            display: true,
        },
    },
};

let labels = ref([]);
let values = ref([]);

function getDateText(timeStamp) {
    let date = new Date(timeStamp);

    let month;
    if (date.getMonth() < 10) {
        month = "0" + (date.getMonth() + 1);
    } else {
        month = date.getMonth() + 1;
    }

    let day;
    if (date.getDate() < 10) {
        day = "0" + date.getDate();
    } else {
        day = date.getDate();
    }

    return day + "-" + month + "-" + date.getFullYear();
}

function getPreviousTimeStamp(timeStamp, daysBack) {
    return timeStamp - daysBack * (24 * 60 * 60 * 1000);
}

function generateChartData() {
    const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
    let date = new Date();

    for (let i = date.getDay(); i < date.getDay() + 7; i++) {
        let j = i;
        if (j >= 7) {
            j -= 7;
        }
        labels.value.push(weekDays[j]);
    }

    //console.log(getDateText(getPreviousTimeStamp(date.getTime(), 2)));
    //console.log(getDateText(date.getTime()));

    //////

    for (let i = 0; i < 7; i++) {
        let result = data.value.workoutData.workouts.filter((obj) => {
            return obj.date == getDateText(getPreviousTimeStamp(date.getTime(), i));
        });
        values.value[i] = 0;
        for (let j = 0; j < result.length; j++) {
            values.value[i] += result[j].time;
        }
        if (values.value[i] == 0) values.value[i] = null;
    }
    values.value.reverse();
}

let chartData = {
    labels: labels.value,
    datasets: [{ data: values.value }],
};

let data = ref(null);

async function sqlStuff() {
    let { data: userData, error } = await supabase.from("UserData").select();
    data.value = userData.find((user) => user.user == supabase.auth.user().id);
}

let show = ref([]);
let dataAssigned = false;
onMounted(() => {
    watch(data, () => {
        if (data != null && !dataAssigned) {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    show.value[i] = true;
                }, i * 75);
            }
            dataAssigned = true;

            generateChartData();
        }
    });
});

sqlStuff();

const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
</script>

<template>
    <div class="m-4 text-white" v-if="data != null">
        <div class="p-4 pt-2 pb-2">
            <h2 class="text-2xl font-medium mb-2">Previous workouts</h2>
            <ul>
                <li
                    :class="show[index] ? 'opacity-100' : 'opacity-0'"
                    class="fade-in bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center"
                    v-for="(workout, index) in data.workoutData.workouts.slice(0, 3)"
                    @click="$router.push({ name: 'workout', params: { id: index, sender: 'home' } })"
                >
                    <div class="flex">
                        <div class="flex items-center mr-1">
                            <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                                <FaIcon class="text-base" icon="dumbbell" />
                            </div>
                        </div>
                        <div>
                            <p class="text-gray-400 text-xs">{{ workout.date.split("-")[0] + " " + monthNames[workout.date.split("-")[1] - 1] }}</p>
                            <p class="font-medium">{{ workout.type }}</p>
                        </div>
                    </div>
                    <div class="mr-4">
                        <FaIcon icon="angle-right" />
                    </div>
                </li>
            </ul>
        </div>

        <br />

        <div class="p-4 pt-2">
            <h2 class="text-2xl font-medium mb-2">Activity</h2>
            <div :class="show[0] ? 'opacity-100' : 'opacity-0'" class="fade-in bg-primary rounded-xl drop-shadow-md h-36">
                <div class="p-4 pt-3">
                    <p class="text-gray-400 text-xs mb-1">Last 7 days</p>
                    <Bar id="myChart" :chart-options="chartOptions" :height="100" :chart-data="chartData" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
