const marketingShare = {
    titles: ["排名", "公司名稱", "國別", "市佔率"],
    data:[
            { Ranking: 1, Company: "台積電", Country: "台灣", Ratio: "53.1" },
            { Ranking: 2, Company: "三星電子", Country: "韓國", Ratio: "17.3" },
            { Ranking: 3, Company: "聯電", Country: "台灣", Ratio: "7.2" },
            { Ranking: 4, Company: "格羅方德", Country: "美國", Ratio: "6.1" },
            { Ranking: 5, Company: "中芯國際", Country: "中國", Ratio: "5.3" },
            { Ranking: 6, Company: "華虹半導體", Country: "中國", Ratio: "2.6" },
            { Ranking: 7, Company: "力積電", Country: "台灣", Ratio: "1.8" },
            { Ranking: 8, Company: "世界先進", Country: "台灣", Ratio: "1.4" },
            { Ranking: 9, Company: "高塔半導體", Country: "以色列", Ratio: "1.4" },
            { Ranking: 10, Company: "東部高科", Country: "南韓", Ratio: "1" }
        ]
};

let GlobalCountry2dArray=[];  
let container,table, thead, tbody;
let comarr=[],paarr=[];

window.onload =function(){
    container = document.getElementById('container');
    table = document.createElement('table');
    table.setAttribute("class", "table");
    table.setAttribute("style", " width: 80%;margin: auto;");
    thead = document.createElement('thead');
    thead.setAttribute("class", "table-dark");
    tbody = document.createElement('tbody');
    CreateThead(marketingShare.titles);
    marketingShare.data.forEach(country=>{
        let values = Object.values(country);
        GlobalCountry2dArray.push(values);
    });
    CreateTbody(GlobalCountry2dArray);

    marketingShare.data.forEach(values=>{
        comarr.push(values.Company);
        paarr.push(values.Ratio);
    });
    
    pie(comarr,paarr);
}


function CreateThead(titleArray){
    let theadTR = document.createElement("tr");
    titleArray.forEach((title, index)=>{
        let th = document.createElement("th");
        th.innerText = title;
        theadTR.append(th);
    });
    thead.append(theadTR);
    table.append(thead);
    container.append(table);
}

function CreateTbody(globalCountry){
    globalCountry.forEach(country => { 
        let tr = document.createElement("tr");
        country.forEach(columndata => {
            let td = document.createElement("td");
            td.innerText = columndata;
            tr.append(td);
        });
        tbody.append(tr);
    });
    table.append(tbody);
}

function pie(compan,pa) {
    let piee = document.getElementById("container2");
    piee.setAttribute("style","width: 70%;margin: auto;");
    var chartpie = new Chart(piee,{
        type:'pie',
        data:{
            labels:compan,
            datasets:[{
                data: pa,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255,75,50)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(255, 138, 64)',
                    'rgb(142, 65, 64)',
                    'rgb(59, 72, 64)'
                ]
            }],
        },
    });
}