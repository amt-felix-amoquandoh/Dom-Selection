let quoteArea = document.querySelector(".quoteArea");
let person = document.querySelector(".quoter");
let newQuote = document.querySelector("#newQuote");

const quotes = [
    {saying: "“Success is getting what you want, happiness is wanting what you get.”", 
    person: " ―W. P. Kinsella"
},
{saying: "“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.”", 
person: "—John Wooden"
},
{saying: "“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.”", 
person: "—Mister Rogers"
},
{saying: "“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”", 
person: "—Dale Carnegie"
},
{saying: "“Success is not final; failure is not fatal: It is the courage to continue that counts.", 
person: "—Winston S. Churchill"
},
{saying: "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”", 
person: "—Eleanor Roosevelt"
},
{saying: "“Learn as if you will live forever, live like you will die tomorrow.", 
person: "—Mahatma Gandhi"
},
{saying: "“We cannot solve problems with the kind of thinking we employed when we came up with them.", 
person: "—Albert Einstein"
},
{saying: "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.”", 
person: "—Walter Anderson"
},
{saying: "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”", 
person: "—Diane McLaren"
},
{saying: "“I never dreamed about success. I worked for it.”" , 
person: "—Estée Lauder"
},
{saying: "“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”", 
person: " — Winston Churchill"
},
{saying: "“Do not let yesterday take up too much of today.”", 
person: " — Will Rogers"
},
{saying: "“Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. “", 
person: " — Alexander Graham Bell"
},
{saying: "“When we strive to become better than we are, everything around us becomes better too.”", 
person: " — Paulo Coelho"
}
]


newQuote.addEventListener("click", function(){
    let random = Math.floor(Math.random * quotes.length);
    
    quoteArea.innerText = quotes[random].saying;
    person.innerText = quotes[random].person;
} );

