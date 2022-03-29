const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard"

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        //console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let highestWicket = 0;
        let nameOfHighestWicketTaker = "";
        let ballersTable = document.querySelectorAll(".table.bowler");
        for(let i = 0 ; i< ballersTable.length ; i++){
            let rows = ballersTable[i].querySelectorAll("tbody tr");
            for(let j = 0 ; j < rows.length ; j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length > 1){
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;
                    // console.log("bowler-->",name,"     wicket-->",wicket);
                    if(wicket > highestWicket){
                        highestWicket = wicket;
                        nameOfHighestWicketTaker = name;
                    }
                }
            }
        }
         console.log("Name of highest Wicket Taker  :",nameOfHighestWicketTaker);
         console.log("Number of wickets taken       :",highestWicket);
        
    }
}