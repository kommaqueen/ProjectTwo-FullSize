console.log("Hello!")

const questions = document.querySelectorAll(".question-list li a")

// stop page loading function on click
questions.forEach(question => question.addEventListener("click", (event) => {
  event.preventDefault()
}))

const question1 = questions[0]
const question2 = questions[1]
const question3 = questions[2]
const question4 = questions[3]
const question5 = questions[4]

const faqText = document.querySelector(".faq-index-text p")
const faqNumber = document.querySelector(".main-number p")

const answer1 = "Organic fingerstache raclette poutine, lo-fi air plant gastropub sartorial schlitz mixtape. Green juice retro sriracha lo-fi. Portland you probably haven't heard of them chia poutine yes plz mustache leggings umami offal distillery four dollar toast. Pinterest adaptogen hashtag raw denim, cred direct trade la croix ugh actually butcher venmo you probably haven't heard of them poutine lumbersexual. Deep v shaman messenger bag thundercats, schlitz venmo trust fund vinyl truffaut vibecession 8-bit woke artisan."
const answer2 = "I'm baby butcher tofu etsy, taiyaki tote bag knausgaard kinfolk swag pickled celiac paleo letterpress migas. Prism slow-carb iceland seitan gentrify, offal photo booth live-edge twee tilde mlkshk food truck typewriter +1 semiotics. Quinoa sartorial kombucha cloud bread vice XOXO small batch lo-fi. Whatever health goth flexitarian celiac fam."
const answer3 = "Narwhal single-origin coffee tilde food truck prism cloud bread bushwick. Farm-to-table unicorn tacos taiyaki pok pok taxidermy organic tattooed beard freegan hoodie wolf. Mukbang +1 man braid, blue bottle ethical asymmetrical portland tousled cardigan pug tonx umami aesthetic pabst meditation. Literally keytar marfa ramps, health goth food truck whatever chia mukbang edison bulb brunch Brooklyn. Tote bag pitchfork ascot pinterest chia shabby chic unicorn kitsch."
const answer4 = "Subway tile meditation pop-up trust fund air plant kitsch. Fit sus hella truffaut crucifix salvia vice echo park mixtape. Yuccie stumptown drinking vinegar, woke tofu coloring book cloud bread affogato. Fam DIY trust fund hot chicken viral photo booth tumblr fingerstache ascot tote bag semiotics stumptown green juice."
const answer5 = "Leggings palo santo swag, keffiyeh green juice umami pickled crucifix cornhole. Offal portland la croix lyft, cronut tumeric lo-fi art party venmo fixie umami. Pok pok tacos irony, taxidermy DIY yes plz salvia. Post-ironic gastropub JOMO, air plant roof party before they sold out yr drinking vinegar vexillologist organic typewriter. Fingerstache air plant organic narwhal kogi, tilde iceland vice next level polaroid tofu. Coloring book kombucha subway tile VHS. Semiotics shabby chic gluten-free air plant."

question1.addEventListener("click", (event) => {
  faqText.innerHTML = answer1;
  faqNumber.innerText = "1"
})

question2.addEventListener("click", (event) => {
  faqText.innerHTML = answer2;
  faqNumber.innerText = "2"
})

question3.addEventListener("click", (event) => {
  faqText.innerHTML = answer3;
  faqNumber.innerText = "3"
})

question4.addEventListener("click", (event) => {
  faqText.innerHTML = answer4;
  faqNumber.innerText = "4"
})

question5.addEventListener("click", (event) => {
  faqText.innerHTML = answer5;
  faqNumber.innerText = "5"
})

// on NEXT click, find current target index and go cycle thru
const nextButton = document.querySelector(".faq-navigation-right")

nextButton.addEventListener("click", (event) => {
  console.log("This cycler works");
  const currentNumber = faqNumber.innerHTML;
  console.log(currentNumber);
  // if current number is 1, then change to faqText and faqNumber to 2, etc.
  if (currentNumber === "1") {
    faqText.innerHTML = answer2;
    faqNumber.innerText = "2";
  } else if (currentNumber === "2") {
    faqText.innerHTML = answer3;
    faqNumber.innerText = "3";
  } else if (currentNumber === "3") {
    faqText.innerHTML = answer4;
    faqNumber.innerText = "4";
  } else if (currentNumber === "4") {
    faqText.innerHTML = answer5;
    faqNumber.innerText = "5";
  }
})

const backButton = document.querySelector(".faq-navigation-left")

backButton.addEventListener("click", (event) => {
  console.log("This cycler works");
  const currentNumber = faqNumber.innerHTML;
  console.log(currentNumber);
  // if current number is 2, then change to faqText and faqNumber to 1, etc.
  if (currentNumber === "2") {
    faqText.innerHTML = answer1;
    faqNumber.innerText = "1";
  } else if (currentNumber === "3") {
    faqText.innerHTML = answer2;
    faqNumber.innerText = "2";
  } else if (currentNumber === "4") {
    faqText.innerHTML = answer3;
    faqNumber.innerText = "3";
  } else if (currentNumber === "5") {
    faqText.innerHTML = answer4;
    faqNumber.innerText = "4";
  }
})
