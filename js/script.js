function openTab(skill, element) {
    let tab_skills, btn_skills;

    tab_skills = document.getElementsByClassName('skills-desc');
    for (let i = 0; i < tab_skills.length; i++) {
        tab_skills[i].style.display = 'none';
    }

    document.getElementById(skill).style.display = 'block';
}

document.getElementById("default").click();