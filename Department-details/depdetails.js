// Main branch selection

let BED = document.getElementById('BED');
let CSE = document.getElementById('CSE');
let CIVIL = document.getElementById('CIVIL');
let ECE = document.getElementById('ECE');
let EEE = document.getElementById('EEE');
let IT = document.getElementById('IT');
let MECH = document.getElementById('MECH');
let DMS = document.getElementById('DMS');
let DCA = document.getElementById('DCA');
let branch_list = [BED,CSE,CIVIL,ECE,EEE,IT,MECH,DMS,DCA]
function toggleMain(id){
    if (id==='BED'){
        branch_list.forEach(element => {
            element.classList.remove('active')
        });
        branch_list[0].classList.add('active')
    }

    else if (id==='CSE'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[1].classList.add('active')
    }

    else if (id==='CIVIL'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[2].classList.add('active')
    }

    else if (id==='ECE'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[3].classList.add('active')
    }

    else if (id==='EEE'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[4].classList.add('active')
    }

    else if (id==='IT'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[5].classList.add('active')
    }

    else if (id==='MECH'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[6].classList.add('active')
    }

    else if (id==='DMS'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[7].classList.add('active')
    }

    else if (id==='DCA'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[8].classList.add('active')
    }
}

// Miain branch selection ends

//BED department sub menu selection

let abt_dep = document.getElementById('about-dep');
let vsn_msn = document.getElementById('vision-mission');
let labs = document.getElementById('laboratories');

let abt_dep_sub = document.getElementById('about');
let vsn_msn_sub = document.getElementById('vsnmsn');
let labs_sub = document.getElementById('labs');

function toggleDepSub(id){
    if (id==="about"){
        abt_dep_sub.classList.add('dep-active')
        vsn_msn_sub.classList.remove('dep-active')
        labs_sub.classList.remove('dep-active')

        abt_dep.classList.add('active-sub')
        vsn_msn.classList.remove('active-sub')
        labs.classList.remove('active-sub')
    }

    else if (id==="vsnmsn"){
        abt_dep_sub.classList.remove('dep-active')
        vsn_msn_sub.classList.add('dep-active')
        labs_sub.classList.remove('dep-active')

        abt_dep.classList.remove('active-sub')
        vsn_msn.classList.add('active-sub')
        labs.classList.remove('active-sub')
    }

    else {
        abt_dep_sub.classList.remove('dep-active')
        vsn_msn_sub.classList.remove('dep-active')
        labs_sub.classList.add('dep-active')

        abt_dep.classList.remove('active-sub')
        vsn_msn.classList.remove('active-sub')
        labs.classList.add('active-sub')
    }
};

//BED Sub menu selection ends

//CSE Sub menu selection

let abt_dep1 = document.getElementById('about-dep1');
let vsn_msn1 = document.getElementById('vision-mission1');
let labs1 = document.getElementById('laboratories1');
let club1 = document.getElementById('clubs1');

let abt_dep_sub1 = document.getElementById('about1');
let vsn_msn_sub1 = document.getElementById('vsnmsn1');
let labs_sub1 = document.getElementById('labs1');
let club_sub1 = document.getElementById('club1');

let cse_menu = [abt_dep1,vsn_msn1,labs1,club1]
let cse_submenu = [abt_dep_sub1,vsn_msn_sub1,labs_sub1,club_sub1]

function toggleDepSub1(id){
    if (id==="about1"){
        cse_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        cse_menu[0].classList.add('active-sub');

        cse_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        cse_submenu[0].classList.add('dep-active');
    }

    else if (id==="vsnmsn1"){
        cse_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        cse_menu[1].classList.add('active-sub');

        cse_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        cse_submenu[1].classList.add('dep-active');
    }

    else if (id==="labs1"){
        cse_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        cse_menu[2].classList.add('active-sub');

        cse_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        cse_submenu[2].classList.add('dep-active');
    }

    else {
        cse_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        cse_menu[3].classList.add('active-sub');

        cse_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        cse_submenu[3].classList.add('dep-active');
    }
}

//CSE Sub ends

//civil sub menu selection

let abt_dep2 = document.getElementById('about-dep2');
let vsn_msn2 = document.getElementById('vision-mission2');
let labs2 = document.getElementById('laboratories2');
let club2 = document.getElementById('clubs2');

let abt_dep_sub2 = document.getElementById('about2');
let vsn_msn_sub2 = document.getElementById('vsnmsn2');
let labs_sub2 = document.getElementById('labs2');
let club_sub2 = document.getElementById('club2');

let civil_menu = [abt_dep2,vsn_msn2,labs2,club2]
let civil_submenu = [abt_dep_sub2,vsn_msn_sub2,labs_sub2,club_sub2]

function toggleDepSub2(id){
    if (id==="about2"){
        civil_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        civil_menu[0].classList.add('active-sub');

        civil_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        civil_submenu[0].classList.add('dep-active');
    }

    else if (id==="vsnmsn2"){
        civil_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        civil_menu[1].classList.add('active-sub');

        civil_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        civil_submenu[1].classList.add('dep-active');
    }

    else if (id==="labs2"){
        civil_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        civil_menu[2].classList.add('active-sub');

        civil_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        civil_submenu[2].classList.add('dep-active');
    }

    else {
        civil_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        civil_menu[3].classList.add('active-sub');

        civil_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        civil_submenu[3].classList.add('dep-active');
    }
}

let abt_dep3 = document.getElementById('about-dep3');
let vsn_msn3 = document.getElementById('vision-mission3');
let labs3 = document.getElementById('laboratories3');
let club3 = document.getElementById('clubs3');

let abt_dep_sub3 = document.getElementById('about3');
let vsn_msn_sub3 = document.getElementById('vsnmsn3');
let labs_sub3 = document.getElementById('labs3');
let club_sub3 = document.getElementById('club3');

let ece_menu = [abt_dep2
    ,vsn_msn2
    ,labs2,club2]
let ece_submenu = [abt_dep_sub2,vsn_msn_sub2,labs_sub2,club_sub2]

function toggleDepSub2(id){
    if (id==="about2"){
        civil_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        civil_menu[0].classList.add('active-sub');

        civil_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        civil_submenu[0].classList.add('dep-active');
    }

    else if (id==="vsnmsn2"){
        civil_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        civil_menu[1].classList.add('active-sub');

        civil_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        civil_submenu[1].classList.add('dep-active');
    }

    else if (id==="labs2"){
        civil_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        civil_menu[2].classList.add('active-sub');

        civil_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        civil_submenu[2].classList.add('dep-active');
    }

    else {
        civil_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        civil_menu[3].classList.add('active-sub');

        civil_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        civil_submenu[3].classList.add('dep-active');
    }
}
