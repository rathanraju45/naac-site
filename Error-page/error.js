const url = new URL(window.location.href);

parameter = url.searchParams.get("branch");


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

if (parameter!='' && !dept_arr.includes(parameter)){
    alert(parameter)
    // window.location.href='../Error-page/error.html'
}
