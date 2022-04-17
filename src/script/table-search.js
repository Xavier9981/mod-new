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
        "<div style='display: block; text-align: center;  border: 1px solid #ccc; padding: 1rem;border-left: 5px solid red; background-color: pink;color: red;border-radius: 8px; text-align: center;'>Sorry search not found</br>Verify spelling.</div>";
    }
  }
}
