<template>
    <section class="bg-[#1b2133d7] shadow-lg w-full h-full flex flex-col items-center p-5">
        <div class="font-bold text-lg">MONIT<i class="text-sky-500">.</i></div>

        <div class="w-full mt-7">
            <div class="mb-3 ml-5">MENUE</div>
            <div class="grid gap-3">
                <dbButtons to="/">
                    <font-awesome-icon :icon="['fas', 'house']"/>
                    Dashboard
                </dbButtons>
                <dbButtons to="/message">
                    <font-awesome-icon :icon="['fas', 'message']" />
                    Message
                </dbButtons>
                <dbButtons>
                    <font-awesome-icon :icon="['fas', 'calendar']" />
                    Calender
                </dbButtons>
            </div>
        </div>

        <div class="w-full mt-7">
            <div class="mb-3 ml-4">RECRUITMENT</div>
            <div class="grid gap-3">
                <dbButtons>
                    <font-awesome-icon :icon="['fas', 'briefcase']" />
                    Jobs
                </dbButtons>
                <dbButtons>
                    <font-awesome-icon :icon="['fas', 'user-group']" />
                    Candidates
                </dbButtons>
                <dbButtons>
                    <font-awesome-icon :icon="['fas', 'circle-nodes']" />
                    My Referrals
                </dbButtons>
                <dbButtons>
                    <font-awesome-icon :icon="['fas', 'desktop']" />
                    Career Site
                </dbButtons>
            </div>
        </div>

        <div class="w-full mt-7">
            <div class="mb-3 ml-4">ORGANIZATION</div>
            <div class="grid gap-3">
                <dbButtons>
                    <font-awesome-icon :icon="['fas', 'briefcase']" />
                    Employee
                </dbButtons>
                <dbButtons>
                    <font-awesome-icon :icon="['fas', 'user-group']" />
                    Structure
                </dbButtons>
                <dbButtons>
                    <font-awesome-icon :icon="['fas', 'circle-nodes']" />
                    Report
                </dbButtons>
                <dbButtons>
                    <font-awesome-icon :icon="['fas', 'desktop']" />
                    Setting
                </dbButtons>
            </div>
        </div>
    </section>
</template>

<script setup>
import dbButtons from './dbButtons.vue';

</script>