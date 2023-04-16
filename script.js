let AllData = [];
let FilterArry = [];

const data = () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      AllData.push(data);
    })
    .catch((error) => console.error(error));
};

data();

console.log("====", AllData);

const filterData = () => {
  const genreValue = document.getElementById("genre");
  const yearVale = document.getElementById("year");
  const langValue = document.getElementById("lang");
  const ratingValue = document.getElementById("rating");
  const selectedValue = genreValue.value;
  const selectedValue1 = yearVale.value;
  const selectedValue2 = langValue.value;
  const selectedValue3 = ratingValue.value;
  console.log(selectedValue, selectedValue1, selectedValue2, selectedValue3);

  AllData.map((v, i) => {
    v.map((v, i) => {
      FilterArry.push(v);
    });
  });

  const result = AllData.map((v, i) => {
    for (let i = 0; i < v.length; i++) {
      const e = v[i];
      if (e.genres == selectedValue || e.original_language == selectedValue2) {
        console.log(e);
        const td = `<tr>
          <td class="tabRow">1</td>
          <td class="tabRow1">
              <div>
                  <p class="movieName">${e.title}</p>
                  <p class="movieGenre">${e.genres}</p>
              </div>
          </td>
          <td class="tabRow">${e.original_language}</td>

        </tr>`;

        const tbody = document.getElementById("tableData");
        tbody.innerHTML = td;
      } else {
        console.log("error");
      }
    }
  });
};
