function tableSearch() {
  let input, filter, table, tr, td, txtValue;

  //Intialising Variables
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("output").innerHTML =
          "<div style='display: none'></div>";
      } else {
        tr[i].style.display = "none";
      }
    } else {
      document.getElementById("output").innerHTML =
        "<div style='background-color: #ffe6e6; border-left: 10px solid red; display: block; color: #900; padding: 0.5rem 0.5rem 0.5rem 1.5rem; margin-top:20px;'> <p>Sorry search not found !!!</p><p><span style='color: black; font-weight: 900; margin-right: 5px;'>Caution:</span>Please verify spelling or move to the next or previous page and search again.</p></div>";
    }
  }
}
