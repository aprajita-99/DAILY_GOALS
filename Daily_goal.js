//saving the goal after entering the input field is disappeared
// and a text of the entered goal appears

let count_filled_goals = 0;

let infield1 = document.body.querySelector(".input-1");
let intext1 = document.body.querySelector(".input-text-1");
infield1.addEventListener('change',(e)=>{
    infield1.remove();
    intext1.innerText= e.target.value;
    count_filled_goals++;
});
let infield2 = document.body.querySelector(".input-2");
let intext2 = document.body.querySelector(".input-text-2");
infield2.addEventListener('change',(e)=>{
    infield2.remove();
    intext2.innerText = e.target.value;
    count_filled_goals++;
});
let infield3= document.body.querySelector(".input-3");
let intext3 = document.body.querySelector(".input-text-3");
infield3.addEventListener('change',(e)=>{
    infield3.remove();
    intext3.innerText= e.target.value;
    count_filled_goals++;
});

//enabling checkmark option 

let prbar = document.querySelector(".progress");
let prtext = document.querySelector(".prtext");
let checkbox = document.body.querySelectorAll(".check");
let warning = document.querySelector(".warning_text");
let count_checked_goals = 0;
let bartext = document.querySelector(".bar-text");
let cnt1 = 0; let cnt2 =0 ;let cnt3 =0;
    checkbox[0].addEventListener('click',()=>{
        if(count_filled_goals!=3)
            warning.innerText = "Please select all the 3 goals!";
        else{
                intext1.classList.toggle("striked");
                warning.innerText = "";
                checkbox[0].classList.toggle("check_marked");
                cnt1 = cnt1^1;
                if((cnt1 + cnt2 + cnt3) == 0 ){
                    prbar.style.width = "0%";
                    prtext.innerText ="";
                    bartext.innerText = "Raise the bar by completing the tasks"
                }
                if((cnt1 + cnt2 + cnt3) == 1 ){
                    prbar.style.width = "33%";
                    prtext.innerText="1/3 completed";
                    bartext.innerText = "Well begun is half done!"
                }
                if((cnt1 + cnt2 + cnt3) == 2 ){
                    prbar.style.width = "66%";
                    prtext.innerText="2/3 completed";
                    bartext.innerText = "Just a step away, keep going!"
                }
                if((cnt1 + cnt2 + cnt3) == 3){
                    prbar.style.width = "100%";
                    prtext.innerText="3/3 completed";
                    bartext.innerText= "Hurray! You completed all the goals.";
                }
                 
        }
    })

    checkbox[1].addEventListener('click',()=>{
        if(count_filled_goals!=3)
            warning.innerText = "Please select all the 3 goals!";
        else{
                intext2.classList.toggle("striked");
                warning.innerText = "";
                checkbox[1].classList.toggle("check_marked");
                cnt2 = cnt2^1;
                if((cnt1 + cnt2 + cnt3) == 0 ){
                    prbar.style.width = "0%";
                    prtext.innerText ="";
                    bartext.innerText = "Raise the bar by completing the tasks"
                }
                if((cnt1 + cnt2 + cnt3) == 1 ){
                    prbar.style.width = "33%";
                    prtext.innerText="1/3 completed";
                    bartext.innerText = "Well begun is half done!"
                }
                if((cnt1 + cnt2 + cnt3) == 2 ){
                    prbar.style.width = "66%";
                    prtext.innerText="2/3 completed";
                    bartext.innerText = "Just a step away, keep going!"
                }
                if((cnt1 + cnt2 + cnt3) == 3){
                    prbar.style.width = "100%";
                    prtext.innerText="3/3 completed";
                    bartext.innerText= "Hurray! You completed all the goals.";
                }
                    
        }
    })

    checkbox[2].addEventListener('click',()=>{
        if(count_filled_goals!=3)
            warning.innerText = "Please select all the 3 goals!";
        else{
                intext3.classList.toggle("striked");
                warning.innerText = "";
                checkbox[2].classList.toggle("check_marked");
                cnt3 = cnt3^1;
                if((cnt1 + cnt2 + cnt3) == 0 ){
                    prbar.style.width = "0%";
                    prtext.innerText ="";
                    bartext.innerText = "Raise the bar by completing the tasks"
                }
                if((cnt1 + cnt2 + cnt3) == 1 ){
                    prbar.style.width = "33%";
                    prtext.innerText="1/3 completed";
                    bartext.innerText = "Well begun is half done!"
                }
                if((cnt1 + cnt2 + cnt3) == 2 ){
                    prbar.style.width = "66%";
                    prtext.innerText="2/3 completed";
                    bartext.innerText = "Just a step away, keep going!"
                }
                if((cnt1 + cnt2 + cnt3) == 3){
                    prbar.style.width = "100%";
                    prtext.innerText="3/3 completed";
                    bartext.innerText= "Hurray! You completed all the goals.";
                }
        }
    })





