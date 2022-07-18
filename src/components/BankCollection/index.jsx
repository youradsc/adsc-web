import "./BankCollection.css"
function BankCollection(){
    return(
        <body class="fullbody">
            <div class="all testbox">
            <form action="/" class="all mainform">
                <div class="all banner">
                <h1 class="h1bank">Bank Onboarding</h1>
                </div>
                <div class="all item">
                <p>Name</p>
                <div class=" all name-item">
                    <input class = "inputstuff all" type="text" name="name" placeholder="First" />
                    <input class ="inputstuff all" type="text" name="name" placeholder="Last" />
                </div>
                </div>
                <div class="all contact-item">
                <div class="all item">
                    <p class ="all" >Routing Number</p>
                    <input class ="inputstuff all" type="text" name="name"/>
                </div>
                <div class="all item">
                    <p class ="all" >Account Number</p>
                    <input class ="inputstuff all" type="text" name="name"/>
                </div>
                </div>
                <div class="btn-block">
                <button class="buttonstuff" type="submit" href="/">Submit</button>
                </div>
            </form>
            </div>
        </body>


)
}
export default BankCollection