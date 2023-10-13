let BED = document.getElementById('BED');
let CSE = document.getElementById('CSE');
let CIVIL = document.getElementById('CIVIL');
let ECE = document.getElementById('ECE');
let EEE = document.getElementById('EEE');
let IT = document.getElementById('IT');
let MECH = document.getElementById('MECH');
let DMS = document.getElementById('DMS');
let DCA = document.getElementById('DCA');

let bed = document.getElementById('bed');
let cse = document.getElementById('cse');
let civil = document.getElementById('civil');
let ece = document.getElementById('ece');
let eee = document.getElementById('eee');
let it = document.getElementById('it');
let mech = document.getElementById('mech');
let dms = document.getElementById('dms');
let dca = document.getElementById('dca');

let branch_list = [BED,CSE,CIVIL,ECE,EEE,IT,MECH,DMS,DCA]
let branch_sub_list =[bed,cse,civil,ece,eee,it,mech,dms,dca]

let abt_dep = document.getElementById('about-dep');
let vsn_msn = document.getElementById('vision-mission');
let labs = document.getElementById('laboratories');

let abt_dep_sub = document.getElementById('about');
let vsn_msn_sub = document.getElementById('vsnmsn');
let labs_sub = document.getElementById('labs');

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

let abt_dep3 = document.getElementById('about-dep3');
let vsn_msn3 = document.getElementById('vision-mission3');
let labs3 = document.getElementById('laboratories3');
let club3 = document.getElementById('clubs3');

let abt_dep_sub3 = document.getElementById('about3');
let vsn_msn_sub3 = document.getElementById('vsnmsn3');
let labs_sub3 = document.getElementById('labs3');
let club_sub3 = document.getElementById('club3');

let ece_menu = [abt_dep3,vsn_msn3,labs3,club3]
let ece_submenu = [abt_dep_sub3,vsn_msn_sub3,labs_sub3,club_sub3]

let abt_dep4 = document.getElementById('about-dep4');
let vsn_msn4 = document.getElementById('vision-mission4');
let labs4 = document.getElementById('laboratories4');
let club4 = document.getElementById('clubs4');

let abt_dep_sub4 = document.getElementById('about4');
let vsn_msn_sub4 = document.getElementById('vsnmsn4');
let labs_sub4 = document.getElementById('labs4');
let club_sub4 = document.getElementById('club4');

let eee_menu = [abt_dep4,vsn_msn4,labs4,club4]
let eee_submenu = [abt_dep_sub4,vsn_msn_sub4,labs_sub4,club_sub4]

let abt_dep5 = document.getElementById('about-dep5');
let vsn_msn5 = document.getElementById('vision-mission5');
let labs5 = document.getElementById('laboratories5');

let abt_dep_sub5 = document.getElementById('about5');
let vsn_msn_sub5 = document.getElementById('vsnmsn5')
let labs_sub5 = document.getElementById('labs5');

let it_menu = [abt_dep5,vsn_msn5,labs5]
let it_submenu = [abt_dep_sub5,vsn_msn_sub5,labs_sub5]

let abt_dep6 = document.getElementById('about-dep6');
let vsn_msn6 = document.getElementById('vision-mission6');
let labs6 = document.getElementById('laboratories6');
let club6 = document.getElementById('clubs6');

let abt_dep_sub6 = document.getElementById('about6');
let vsn_msn_sub6 = document.getElementById('vsnmsn6');
let labs_sub6 = document.getElementById('labs6');
let club_sub6 = document.getElementById('club6');

let mech_menu = [abt_dep6,vsn_msn6,labs6,club6]
let mech_submenu = [abt_dep_sub6,vsn_msn_sub6,labs_sub6,club_sub6]

let abt_dep7 = document.getElementById('about-dep7');
let club7 = document.getElementById('clubs7');

let abt_dep_sub7 = document.getElementById('about7');
let club_sub7 = document.getElementById('club7');

let dms_menu = [abt_dep7,club7]
let dms_submenu = [abt_dep_sub7,club_sub7]

dept_arr = [
    "computer-science-engineering",
    "civil-engineering",
    "mechanical-engineering",
    "electronics-communication-engineering",
    "electrical-electronics-engineering",
    "information-technology",
    "department-of-management-studies",
    "department-of-computer-applications",
    "basic-engineering"
]

//Navigation from the Departments page

document.addEventListener("DOMContentLoaded", function(){

    function getDivParameter() {
        const params = new URLSearchParams(window.location.search);
        return params.get("branch");
    }

    function updateContent(){
        let branch = getDivParameter();
        if (branch === null){
            branch = 'basic-engineering'
        }
        if (dept_arr.includes(branch)){
            if (branch === 'basic-engineering'){
                toggleMain('BED');
            }

            else if (branch === 'computer-science-engineering'){
                toggleMain('CSE');
            }

            else if (branch === 'civil-engineering'){
                toggleMain('CIVIL');
            }

            else if (branch === 'electronics-communication-engineering'){
                toggleMain('ECE');
            }

            else if (branch === 'electrical-electronics-engineering'){
                toggleMain('EEE');
            }

            else if (branch === 'information-technology'){
                toggleMain('IT');
            }

            else if (branch === 'mechanical-engineering'){
                toggleMain('MECH');
            }

            else if (branch === 'department-of-management-studies'){
                toggleMain('DMS');
            }

            else if (branch === 'department-of-computer-applications'){
                toggleMain('DCA');
            }  
        }

        else {
            errorPage();
        }
    }

    updateContent();
});

function errorPage(){
    window.location.href='../Error-page/error.html'
};

// Main branch selection

function toggleMain(id){

    const url = new URL(window.location.href);

    if (id==='BED'){
        branch_list.forEach(element => {
            element.classList.remove('active')
        });
        branch_list[0].classList.add('active')

        branch_sub_list.forEach(element => {
            element.classList.remove('dep-isactive')
        });
        branch_sub_list[0].classList.add('dep-isactive')

        document.title = 'Basic Engineering'

        url.searchParams.set("branch","basic-engineering")
    }

    else if (id==='CSE'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[1].classList.add('active')

        branch_sub_list.forEach(element => {
            element.classList.remove('dep-isactive')
        });
        branch_sub_list[1].classList.add('dep-isactive')

        document.title ='Computer Science Engineering'

        url.searchParams.set("branch","computer-science-engineering")
    }

    else if (id==='CIVIL'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[2].classList.add('active')

        branch_sub_list.forEach(element => {
            element.classList.remove('dep-isactive')
        });
        branch_sub_list[2].classList.add('dep-isactive')

        document.title = 'Civil engineering'

        url.searchParams.set("branch","civil-engineering")
    }

    else if (id==='ECE'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[3].classList.add('active')

        branch_sub_list.forEach(element => {
            element.classList.remove('dep-isactive')
        });
        branch_sub_list[3].classList.add('dep-isactive')

        document.title = 'Electronics & Communication Engineering'

        url.searchParams.set("branch","electronics-communication-engineering")
    }

    else if (id==='EEE'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[4].classList.add('active')

        branch_sub_list.forEach(element => {
            element.classList.remove('dep-isactive')
        });
        branch_sub_list[4].classList.add('dep-isactive')

        document.title = 'Elecrical & Electronics Engineering'

        url.searchParams.set("branch","electrical-electronics-engineering")
    }

    else if (id==='IT'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[5].classList.add('active')

        branch_sub_list.forEach(element => {
            element.classList.remove('dep-isactive')
        });
        branch_sub_list[5].classList.add('dep-isactive')

        document.title = 'Information Technology'

        url.searchParams.set("branch","information-technology")
    }

    else if (id==='MECH'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[6].classList.add('active')

        branch_sub_list.forEach(element => {
            element.classList.remove('dep-isactive')
        });
        branch_sub_list[6].classList.add('dep-isactive')

        document.title = 'Mechnaical Engineering'

        url.searchParams.set("branch","mechanical-engineering")
    }

    else if (id==='DMS'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[7].classList.add('active')

        branch_sub_list.forEach(element => {
            element.classList.remove('dep-isactive')
        });
        branch_sub_list[7].classList.add('dep-isactive')

        document.title = 'Management Studies'

        url.searchParams.set("branch","department-of-management-studies")
    }

    else if (id==='DCA'){
        branch_list.forEach(element =>{
            element.classList.remove('active')
        });
        branch_list[8].classList.add('active')

        branch_sub_list.forEach(element => {
            element.classList.remove('dep-isactive')
        });
        branch_sub_list[8].classList.add('dep-isactive')

        document.title = 'Computer Applications'

        url.searchParams.set("branch","department-of-computer-applications")
    }

    window.history.replaceState({}, "", url.toString());
};

// Miain branch selection ends

//BED department sub menu selection

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

// CIVIL sub menu ends

// ECE sub menu selection starts

function toggleDepSub3(id){
    if (id==="about3"){
        ece_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        ece_menu[0].classList.add('active-sub');

        ece_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        ece_submenu[0].classList.add('dep-active');
    }

    else if (id==="vsnmsn3"){
        ece_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        ece_menu[1].classList.add('active-sub');

        ece_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        ece_submenu[1].classList.add('dep-active');
    }

    else if (id==="labs3"){
        ece_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        ece_menu[2].classList.add('active-sub');

        ece_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        ece_submenu[2].classList.add('dep-active');
    }

    else {
        ece_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        ece_menu[3].classList.add('active-sub');

        ece_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        ece_submenu[3].classList.add('dep-active');
    }
}

// ECE sub menu ends

// EEE sub menu selection starts

function toggleDepSub4(id){
    if (id==="about4"){
        eee_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        eee_menu[0].classList.add('active-sub');

        eee_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        eee_submenu[0].classList.add('dep-active');
    }

    else if (id==="vsnmsn4"){
        eee_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        eee_menu[1].classList.add('active-sub');

        eee_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        eee_submenu[1].classList.add('dep-active');
    }

    else if (id==="labs4"){
        eee_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        eee_menu[2].classList.add('active-sub');

        eee_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        eee_submenu[2].classList.add('dep-active');
    }

    else {
        eee_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        eee_menu[3].classList.add('active-sub');

        eee_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        eee_submenu[3].classList.add('dep-active');
    }
}

// EEE sub menu ends

//IT sub menu selection starts

function toggleDepSub5(id){
    if (id==="about5"){
        it_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        it_menu[0].classList.add('active-sub');

        it_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        it_submenu[0].classList.add('dep-active');
    }

    else if (id=='vsnmsn5'){
        it_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        it_menu[1].classList.add('active-sub');

        it_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        it_submenu[1].classList.add('dep-active');
    }

    else {
        it_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        it_menu[2].classList.add('active-sub');

        it_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        it_submenu[2].classList.add('dep-active');
    }
}

//IT sub menu ends

//MECH sub menu selection stats

function toggleDepSub6(id){
    if (id==="about6"){
        mech_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        mech_menu[0].classList.add('active-sub');

        mech_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        mech_submenu[0].classList.add('dep-active');
    }

    else if (id==="vsnmsn6"){
        mech_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        mech_menu[1].classList.add('active-sub');

        mech_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        mech_submenu[1].classList.add('dep-active');
    }

    else if (id==="labs6"){
        mech_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        mech_menu[2].classList.add('active-sub');

        mech_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        mech_submenu[2].classList.add('dep-active');
    }

    else {
        mech_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        mech_menu[3].classList.add('active-sub');

        mech_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        mech_submenu[3].classList.add('dep-active');
    }
}

//MECH sub menu ends

//DMS sub menu selection

function toggleDepSub7(id){
    if (id==="about7"){
        dms_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        dms_menu[0].classList.add('active-sub');

        dms_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        dms_submenu[0].classList.add('dep-active');
    }

    else {
        dms_menu.forEach(element => {
            element.classList.remove('active-sub');
        });
        dms_menu[1].classList.add('active-sub');

        dms_submenu.forEach(element => {
            element.classList.remove('dep-active');
        });
        dms_submenu[1].classList.add('dep-active');
    }
}

//DMS sub menu ends
