<template>
    <nav>
        <RouterLink to="/items/grades"><span>Grade</span></RouterLink>
        <RouterLink to="/items/classGrades"><span>ClassGrade</span></RouterLink>
        <RouterLink to="/items/choose"><span>ClassChoose</span></RouterLink>
    </nav>
    <router-view />
</template>

<style scoped>
a span {
    background: linear-gradient(to right, #000000 30%, #000000) no-repeat left bottom;
    background-size: 0px 5px;
    transition: 0.5s;
}

a span:hover {
    background-size: 100% 5px;
}

nav{
    display: flex;
    flex-direction: column;
}

nav a{
    display: block;
    font-size: 3rem;
}
</style>
