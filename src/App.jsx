import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dash2 from "./components/Dash2";
import Home1920 from "./components/Home1920";
import Dash1 from "./components/Dash1";
import Login from "./components/Login";
import BankCollection from "./components/BankCollection"
import StoreFront from "./components/StoreFront";
import ProductFront from "./components/ProductFront"
import { Authenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <Authenticator.Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/dash2" element = {<Dash2 {...dash2Data} />}/>
        <Route path="/" element = {<Home1920 {...home1920Data} />} />
        <Route path="/dash1" element={<Dash1 {...dash1Data} />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/store" element={<StoreFront />}/>
        <Route path="/products" element={<ProductFront />}/>
        <Route path="/bank" element={<BankCollection />}/>
      </Routes>
    </BrowserRouter>
    </Authenticator.Provider>
  );
}

export default App;
const totalSales1Data = {
    totalSales: "Total Sales",
    x512K: "$512K",
};

const totalSales2Data = {
    totalSales: "Total Profit",
    x512K: "$45K",
    className: "total-profit",
};

const sales1Data = {
    children: "Sales",
};

const sales2Data = {
    children: "Profit",
    className: "legend-item",
};

const x11Data = {
    nikeAirJordan: "Nike Air Jordan",
    number1: "330",
    number2: "645",
    price: "$415.01",
};

const x12Data = {
    nikeAirJordan: "Adidas Football",
    number1: "568",
    number2: "321",
    price: "$326.51",
};

const x13Data = {
    nikeAirJordan: "Puma Futsal",
    number1: "124",
    number2: "880",
    price: "$180.50",
};

const x31Data = {
    name: "Leslie Alexander",
    leslieAGmailCom: "leslie.a@gmail.com",
};

const x32Data = {
    name: "Albert Flores",
    leslieAGmailCom: "albert.f@gmail.com",
    className: "costumers-list-item-1",
};

const dash2Data = {
    title: "Dashboard",
    name1: "Samantha",
    totalCost: "Total Cost",
    price1: "$204",
    earnings: "Earnings",
    year: "Year",
    name2: "Jan",
    feb: "Feb",
    place1: "Mar",
    apr: "Apr",
    name3: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
    july: "July",
    price2: "$10.500",
    productSales: "Product Sales",
    productName: "Product Name",
    place2: "Sales",
    place3: "Stock",
    amount: "Amount",
    status: "Status",
    adidasBlackHat: "Adidas Black Hat",
    number1: "710",
    number2: "0",
    price3: "$60.25",
    noStock1: "No Stock",
    nikeWhiteJacket: "Nike White Jacket",
    number3: "654",
    number4: "0",
    price4: "$86.98",
    noStock2: "No Stock",
    costumersList: "Costumers List",
    name4: "Brooklyn Simmons",
    brooklynSGmailCom: "brooklyn.s@gmail.com",
    name5: "Jacob Jones",
    jacobJGmailCom: "jacob.j@gmail.com",
    name6: "Theresa Webb",
    theresaWGmailCom: "theresa.w@gmail.com",
    totalSales1Props: totalSales1Data,
    totalSales2Props: totalSales2Data,
    sales1Props: sales1Data,
    sales2Props: sales2Data,
    x11Props: x11Data,
    x12Props: x12Data,
    x13Props: x13Data,
    x31Props: x31Data,
    x32Props: x32Data,
};

const buttonData = {
    children: "Login/Logout",
};

const buttonsRoundPrimary1Data = {
    children: "Try it free",
};

const frame541Data = {
    children: "Sold",
};

const frame542Data = {
    children: "Sold",
    className: "frame-55",
};

const group72Data = {
    pending: "Invested",
    price: "$33,605",
};

const frame101Data = {
    children: "Step 3",
};

const frame102Data = {
    children: "Step 4",
};

const group411Data = {
    iconBar_Chart: "/img/g-chart-1@2x.svg",
    intuitiveDesign: "Intuitive Design",
};

const group412Data = {
    iconBar_Chart: "/img/toggle-1@2x.svg",
    intuitiveDesign: "Easy to use purchase methods",
    className: "group-40",
};

const buttonsRoundPrimary2Data = {
    children: "Try it free",
    className: "buttons-round-primary-1",
};

const frame1581Data = {
    iconCart: "/img/cart-simple-add-1@2x.svg",
    easyProductSelection: "Easy Product Selection",
};

const frame1582Data = {
    iconCart: "/img/metrics-1@2x.svg",
    easyProductSelection: "Easy finances",
};

const buttonsRoundPrimaryIconData = {
    tryItFree: "Try it free",
    iconsSolidApple: "/img/icons-solid-apple@2x.svg",
};

const buttonsPrimaryIconData = {
    tryItFree: "See all integrations",
    iconsSolidRight: "/img/icons-solid-right@2x.svg",
};

const home1920Data = {
    salesstrike: "SalesStrike",
    navbarLinkText1: "Home",
    navbarLinkText2: "Products",
    navbarLinkText3: "Dashboard",
    navbarLinkText4: "Contact Us",
    title: "Monetizing Your Business Ideas",
    haveYouEverThough: <React.Fragment>Have you ever thought a certain product would sell well yet couldn’t make any money of that idea?<br />Now with SalesStrike you can. Simply purchase the invetory and we’ll resell it for you. Simple as that!</React.Fragment>,
    noCreditCardRequired: "No credit card required.",
    ellipse3: "/img/ellipse-3@2x.png",
    iWishICouldveU: "“I wish I could’ve used this to sell products instead of the hassle of dropshipping.”",
    name1: "Sarah Lance",
    ellipse10: "/img/ellipse-10@2x.png",
    name2: "Jenny Wilson",
    jwilsonGumSo: "jwilson@gum.so",
    frequentUser: "Frequent User",
    x10Products: "10+ Products",
    text1: "$10000+",
    productsPurchased: "Products Purchased",
    search: "Search",
    product: "PRODUCT",
    place: "DATE",
    amount: "AMOUNT",
    status: "STATUS",
    toys: "Toys",
    name3: "May 10",
    price1: "$645",
    pending1: "Pending",
    cutlery: "Cutlery",
    name4: "May 9",
    price2: "$1,573",
    sportsGoods: "Sports Goods",
    name5: "May 8",
    price3: "$3,579",
    purchaseSuccessful: "Purchase Successful",
    toysHaveBeenBought: "Toys have been bought!",
    pending2: "Pending",
    price4: "$2,223",
    collected: "Collected",
    price5: "$58,035",
    startInSeconds: "START IN SECONDS",
    getStartedInFourEasySteps: "Get started in four easy steps",
    step1: "Step 1",
    easyOneClickSignUp: "Easy one click sign-up",
    step2: "Step 2",
    chooseHighQualityProducts: "Choose high quality products",
    purchasedYourInventory: "Purchased your inventory",
    collectYourProfits: "Collect your profits",
    image1: "/img/image-1-1@1x.png",
    allTheBenefitsOf: "All the benefits of business and product resale without the hassle",
    sameDayPayouts: "Same day payouts",
    theFutureOfCommodities: "The future of commodities",
    weAllowYouToInve: "We allow you to invest in products, support your favorites business’s and make a profit.",
    weGiveYouAllTheDataYouNeed: "We give you all the data you need!",
    youCanCollectYourPayoutAnytime: "You can collect your payout anytime",
    image2: "/img/image-2-1@1x.png",
    number1: "01",
    proprietaryAlgorithms: "Proprietary Algorithms",
    ourAlgorithmsFind: "Our algorithms find the best products and bring them to you to research and choose the best of the best!",
    number2: "02",
    breakingEdgeResearch: "Breaking Edge Research",
    ourResearchToolsG: "Our research tools give you clear information about a product before you purchase it.",
    number3: "03",
    novelProducts: "Novel Products",
    ourProductsAreUni: "Our products are unique, niche and easy to sell and scale.",
    number4: "04",
    quantativeModeling: "Quantative Modeling",
    allOurModelsThat: "All our models that give your products special value are highly accurate and mathematical.",
    image3: "/img/image-3-1@2x.png",
    thePlatformOfMyDreams: "The platform of my dreams!",
    weLoveOurCustomers: "WE LOVE OUR CUSTOMERS",
    andTheySeemToLoveUs: "And they seem to love us",
    iWasAbleToSupportMyFavorit: "I was able to support my favorit",
    withinMinutesIHad: "Within minutes I had my first product and felt like a real business woman!",
    integrations: "INTEGRATIONS",
    ourPlatformWillIn: "Our platform will integrate with all major ECommerce Providers",
    image8: "/img/image-8@2x.png",
    image5: "/img/image-5@2x.png",
    image6: "/img/image-6@2x.png",
    image7: "/img/image-7@2x.png",
    copyright: "© SalesStrike",
    terms: "Terms",
    privacy: "Privacy",
    spanText1: "By using our website you agree to our ",
    spanText2: "cookie",
    spanText3: " policy.",
    buttonProps: buttonData,
    frame1582Props: buttonsRoundPrimary1Data,
    frame54Props: frame541Data,
    frame54Props2: frame542Data,
    group72Props: group72Data,
    frame101Props: frame101Data,
    frame102Props: frame102Data,
    group411Props: group411Data,
    group412Props: group412Data,
    buttonsRoundPrimaryProps: buttonsRoundPrimary2Data,
    frame1581Props: frame1581Data,
    frame1582Props2: frame1582Data,
    buttonsRoundPrimaryIconProps: buttonsRoundPrimaryIconData,
    buttonsPrimaryIconProps: buttonsPrimaryIconData,
};

const chartTitle2Data = {
    className: "chart-title-6",
};

const dash1Data = {
    rightcolumnimg1: "https://cdn.animaapp.com/projects/625319d76f01a03c8be7d01a/files/dashboard-dark.gif",
    rightcolumnimg2: "https://cdn.animaapp.com/projects/625319d76f01a03c8be7d01a/files/dashboard-dark.gif",
    welcomeToYourDashboard: "Welcome to your dashboard!",
    tryOurNewAdminDa: "Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!",
    chartTitle1: "Chart Title",
    x110SinceYesterday1: "1.10% Since yesterday",
    chartTitle2: "CHART TITLE",
    text3: "2,643",
    x110SinceYesterday2: "1.10% Since yesterday",
    x110SinceYesterday3: "1.10% Since yesterday",
    chartTitle3: "Chart Title",
    chartTitle4: "Chart Title",
    x110SinceYesterday4: "1.10% Since yesterday",
    chartTitleProps: chartTitle2Data,
};

