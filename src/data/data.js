import { ref } from "vue";

export const data = ref([
    {
        type: "Leg day",
        date: "27 mars",
        exercises: [
            {
                name: "Squats",
                sets: [
                    {
                        weight: 90,
                        reps: 6,
                    },
                    {
                        weight: 90,
                        reps: 5,
                    },
                    {
                        weight: 90,
                        reps: 5,
                    },
                ],
            },
            {
                name: "Leg extensions",
                sets: [
                    {
                        weight: 122.5,
                        reps: 10,
                    },
                    {
                        weight: 122.5,
                        reps: 10,
                    },
                    {
                        weight: 122.5,
                        reps: 9,
                    },
                ],
            },
            {
                name: "Leg curls",
                sets: [
                    {
                        weight: 65,
                        reps: 10,
                    },
                    {
                        weight: 65,
                        reps: 9,
                    },
                    {
                        weight: 65,
                        reps: 9,
                    },
                ],
            },
            {
                name: "Leg press",
                sets: [
                    {
                        weight: 122.5,
                        reps: 12,
                    },
                    {
                        weight: 122.5,
                        reps: 11,
                    },
                    {
                        weight: 122.5,
                        reps: 11,
                    },
                    {
                        weight: 122.5,
                        reps: 10,
                    },
                ],
            },
        ],
    },
    {
        type: "Pull day",
        date: "24 mars",
        exercises: [
            {
                name: "Row",
                sets: [
                    {
                        weight: 28.5,
                        reps: 12,
                    },
                    {
                        weight: 28.5,
                        reps: 12,
                    },
                    {
                        weight: 28.5,
                        reps: 11,
                    },
                ],
            },
            {
                name: "Lats pulldown",
                sets: [
                    {
                        weight: 23.5,
                        reps: 12,
                    },
                    {
                        weight: 23.5,
                        reps: 11,
                    },
                    {
                        weight: 23.5,
                        reps: 9,
                    },
                ],
            },
        ],
    },
    {
        type: "Chest day",
        date: "22 mars",
        exercises: [
            {
                name: "Bench press",
                sets: [
                    {
                        weight: 75,
                        reps: 5,
                    },
                    {
                        weight: 75,
                        reps: 5,
                    },
                    {
                        weight: 75,
                        reps: 5,
                    },
                ],
            },
            {
                name: "Shoulder press",
                sets: [
                    {
                        weight: 25,
                        reps: 9,
                    },
                    {
                        weight: 25,
                        reps: 9,
                    },
                    {
                        weight: 25,
                        reps: 8,
                    },
                ],
            },
        ],
    },
]);
