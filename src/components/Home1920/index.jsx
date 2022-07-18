import React from "react";
import Button from "../Button";
import ButtonsRoundPrimary from "../ButtonsRoundPrimary";
import Frame54 from "../Frame54";
import Group72 from "../Group72";
import Frame10 from "../Frame10";
import Group41 from "../Group41";
import Frame158 from "../Frame158";
import NavBarFull from "../NavBarFull";
import ButtonsRoundPrimaryIcon from "../ButtonsRoundPrimaryIcon";
import ButtonsPrimaryIcon from "../ButtonsPrimaryIcon";
import "./Home1920.css";
import { useAuthenticator, Heading, View } from '@aws-amplify/ui-react';
import {NavLink as Link } from "react-router-dom"






function Home1920(props) {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const {
    salesstrike,
    navbarLinkText1,
    navbarLinkText2,
    navbarLinkText3,
    navbarLinkText4,
    title,
    haveYouEverThough,
    noCreditCardRequired,
    ellipse3,
    iWishICouldveU,
    name1,
    ellipse10,
    name2,
    jwilsonGumSo,
    frequentUser,
    x10Products,
    text1,
    productsPurchased,
    search,
    product,
    place,
    amount,
    status,
    toys,
    name3,
    price1,
    pending1,
    cutlery,
    name4,
    price2,
    sportsGoods,
    name5,
    price3,
    purchaseSuccessful,
    toysHaveBeenBought,
    pending2,
    price4,
    collected,
    price5,
    startInSeconds,
    getStartedInFourEasySteps,
    step1,
    easyOneClickSignUp,
    step2,
    chooseHighQualityProducts,
    purchasedYourInventory,
    collectYourProfits,
    image1,
    allTheBenefitsOf,
    sameDayPayouts,
    theFutureOfCommodities,
    weAllowYouToInve,
    weGiveYouAllTheDataYouNeed,
    youCanCollectYourPayoutAnytime,
    image2,
    number1,
    proprietaryAlgorithms,
    ourAlgorithmsFind,
    number2,
    breakingEdgeResearch,
    ourResearchToolsG,
    number3,
    novelProducts,
    ourProductsAreUni,
    number4,
    quantativeModeling,
    allOurModelsThat,
    image3,
    thePlatformOfMyDreams,
    weLoveOurCustomers,
    andTheySeemToLoveUs,
    iWasAbleToSupportMyFavorit,
    withinMinutesIHad,
    integrations,
    ourPlatformWillIn,
    image8,
    image5,
    image6,
    image7,
    copyright,
    terms,
    privacy,
    spanText1,
    spanText2,
    spanText3,
    buttonProps,
    frame1582Props,
    frame54Props,
    frame54Props2,
    group72Props,
    frame101Props,
    frame102Props,
    group411Props,
    group412Props,
    buttonsRoundPrimaryProps,
    frame1581Props,
    frame1582Props2,
    buttonsRoundPrimaryIconProps,
    buttonsPrimaryIconProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="frame-278">
          <NavBarFull />
          <div className="section-hero">
            <div className="group-147">
              <h1 className="title-1">{title}</h1>
              <div className="have-you-ever-though dmsans-bold-waterloo--21px">{haveYouEverThough}</div>
              <div className="group-54">
                <ButtonsRoundPrimary>{frame1582Props.children}</ButtonsRoundPrimary>
                <div className="no-credit-card-required dmsans-bold-waterloo--13px">{noCreditCardRequired}</div>
              </div>
              <div className="overlap-group-2">
                <div className="flex-row-1">
                  <img className="ellipse-3" src={ellipse3} />
                  <div className="i-wish-i-couldve-u dmsans-bold-waterloo--18px">{iWishICouldveU}</div>
                </div>
                <div className="name-5 dmsans-bold-waterloo--13px">{name1}</div>
              </div>
            </div>
            <div className="overlap-group2">
              <div className="frame-59">
                <div className="frame-80">
                  <div className="group-79">
                    <div className="flex-row-2">
                      <img className="ellipse-10" src={ellipse10} />
                      <div className="group-container">
                        <div className="group-77">
                          <div className="name-6 dmsans-normal-white-20px">{name2}</div>
                          <img className="menu-5-1" src="/img/menu-5-1@2x.svg" />
                        </div>
                        <div className="group-78">
                          <img className="icon-mail" src="/img/mail-1@2x.svg" />
                          <div className="jwilsongumso dmsans-bold-pale-sky-16px">{jwilsonGumSo}</div>
                        </div>
                      </div>
                    </div>
                    <div className="group-76">
                      <div className="frame-56">
                        <div className="frequent-user dmsans-bold-white-14px">{frequentUser}</div>
                      </div>
                      <div className="frame-57">
                        <div className="x10-products dmsans-bold-pale-sky-14px">{x10Products}</div>
                      </div>
                      <div className="frame-58">
                        <div className="text-1 dmsans-bold-pale-sky-14px">{text1}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-64">
                  <div className="group-63">
                    <div className="flex-row-3">
                      <div className="products-purchased dmsans-bold-white-18px">{productsPurchased}</div>
                      <img className="zoom-1" src="/img/zoom-1@2x.svg" />
                      <div className="overlap-group1-1">
                        <div className="search dmsans-bold-pale-sky-12px">{search}</div>
                      </div>
                    </div>
                    <div className="flex-row-4 dmsans-bold-pale-sky-12px">
                      <div className="product">{product}</div>
                      <div className="place-3">{place}</div>
                      <div className="amount-1">{amount}</div>
                      <div className="status-1">{status}</div>
                    </div>
                    <div className="group-67 dmsans-bold-white-12px">
                      <div className="toys">{toys}</div>
                      <div className="name-7">{name3}</div>
                      <div className="price-4">{price1}</div>
                      <div className="frame-53">
                        <div className="pending">{pending1}</div>
                      </div>
                    </div>
                    <div className="overlap-group-3 dmsans-bold-white-12px">
                      <div className="cutlery">{cutlery}</div>
                      <div className="name-8">{name4}</div>
                      <div className="price-5">{price2}</div>
                      <Frame54>{frame54Props.children}</Frame54>
                    </div>
                    <div className="group-65 dmsans-bold-white-12px">
                      <div className="sports-goods">{sportsGoods}</div>
                      <div className="name-9">{name5}</div>
                      <div className="price-6">{price3}</div>
                      <Frame54 className={frame54Props2.className}>{frame54Props2.children}</Frame54>
                    </div>
                  </div>
                </div>
                <div className="group-69">
                  <div className="group-68">
                    <img className="vector" src="/img/vector-1@2x.svg" />
                    <div className="purchase-successful">{purchaseSuccessful}</div>
                    <div className="toys-have-been-bought">{toysHaveBeenBought}</div>
                  </div>
                </div>
                <div className="group-container-1">
                  <div className="group-70">
                    <div className="pending-1 dmsans-bold-pale-sky-16px">{pending2}</div>
                    <div className="price-7 dmsans-bold-white-23px">{price4}</div>
                  </div>
                  <div className="group-75">
                    <div className="group-74">
                      <div className="collected dmsans-bold-pale-sky-16px">{collected}</div>
                      <div className="price-8 dmsans-bold-white-23px">{price5}</div>
                    </div>
                    <Group72 pending={group72Props.pending} price={group72Props.price} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-276">
          <div className="start-in-seconds dmsans-bold-winter-sky-16px">{startInSeconds}</div>
          <div className="get-started-in-four-easy-steps dmsans-bold-white-42px">{getStartedInFourEasySteps}</div>
          <div className="steps">
            <div className="overlap-group3">
              <img className="mouse-2-1" src="/img/mouse-2-1@2x.svg" />
              <div className="frame-8">
                <div className="step-1 dmsans-bold-white-14px">{step1}</div>
              </div>
              <div className="easy-one-click-sign-up dmsans-bold-waterloo--18px">{easyOneClickSignUp}</div>
            </div>
            <div className="overlap-group2-1">
              <img className="grid-view-1" src="/img/grid-view-1@2x.svg" />
              <div className="frame-9">
                <div className="step-2 dmsans-bold-white-14px">{step2}</div>
              </div>
              <div className="choose-high-quality-products dmsans-bold-waterloo--18px">{chooseHighQualityProducts}</div>
            </div>
            <div className="overlap-group-4">
              <img className="algorithm-1" src="/img/algorithm-1@2x.svg" />
              <Frame10>{frame101Props.children}</Frame10>
              <div className="purchased-your-inventory dmsans-bold-waterloo--18px">{purchasedYourInventory}</div>
            </div>
            <div className="overlap-group1-2">
              <img className="components-1" src="/img/components-1@2x.svg" />
              <Frame10>{frame102Props.children}</Frame10>
              <div className="collect-your-profits dmsans-bold-waterloo--18px">{collectYourProfits}</div>
            </div>
          </div>
        </div>
        <div className="frame-285">
          <div className="overlap-group3-1">
            <div className="rectangle-26"></div>
            <img className="image-1-1" src={image1} />
          </div>
          <div className="frame-287">
            <div className="all-the-benefits-of dmsans-bold-white-42px">{allTheBenefitsOf}</div>
            <div className="group-44">
              <Group41 iconBar_Chart={group411Props.iconBar_Chart} intuitiveDesign={group411Props.intuitiveDesign} />
              <Group41
                iconBar_Chart={group412Props.iconBar_Chart}
                intuitiveDesign={group412Props.intuitiveDesign}
                className={group412Props.className}
              />
              <div className="group-39">
                <div className="overlap-group2-2">
                  <img className="quote-1" src="/img/quote-1@2x.svg" />
                </div>
                <div className="same-day-payouts dmsans-bold-waterloo--18px">{sameDayPayouts}</div>
              </div>
            </div>
            <ButtonsRoundPrimary className={buttonsRoundPrimaryProps.className}>
              {buttonsRoundPrimaryProps.children}
            </ButtonsRoundPrimary>
          </div>
        </div>
        <div className="frame-274">
          <div className="frame-73">
            <div className="flex-col">
              <div className="the-future-of-commodities dmsans-bold-white-42px">{theFutureOfCommodities}</div>
              <div className="we-allow-you-to-inve dmsans-bold-waterloo--21px">{weAllowYouToInve}</div>
              <div className="frame-249">
                <div className="group-157">
                  <div className="frame-71">
                    <Frame158
                      iconCart={frame1581Props.iconCart}
                      easyProductSelection={frame1581Props.easyProductSelection}
                    />
                    <div className="you dmsans-bold-waterloo--18px">{weGiveYouAllTheDataYouNeed}</div>
                  </div>
                  <div className="frame-72">
                    <Frame158
                      iconCart={frame1582Props2.iconCart}
                      easyProductSelection={frame1582Props2.easyProductSelection}
                    />
                    <div className="you dmsans-bold-waterloo--18px">{youCanCollectYourPayoutAnytime}</div>
                  </div>
                </div>
                <ButtonsRoundPrimaryIcon
                  tryItFree={buttonsRoundPrimaryIconProps.tryItFree}
                  iconsSolidApple={buttonsRoundPrimaryIconProps.iconsSolidApple}
                />
              </div>
            </div>
            <div className="overlap-group-5">
              <div className="rectangle-27"></div>
              <img className="image-2" src={image2} />
            </div>
          </div>
        </div>
        <div className="frame-270">
          <div className="group-254">
            <div className="group-252">
              <div className="number-3 dmsans-bold-slate-gray-26px">{number1}</div>
              <div className="algorithms-container">
                <div className="proprietary-algorithms dmsans-bold-white-20px">{proprietaryAlgorithms}</div>
                <div className="our-algorithms-find dmsans-normal-waterloo--18px">{ourAlgorithmsFind}</div>
              </div>
            </div>
            <div className="group-253">
              <div className="flex-row-5">
                <div className="number-2 dmsans-bold-slate-gray-26px">{number2}</div>
                <div className="breaking-edge-research dmsans-bold-white-20px">{breakingEdgeResearch}</div>
              </div>
              <div className="our dmsans-normal-waterloo--18px">{ourResearchToolsG}</div>
            </div>
            <div className="group-250">
              <div className="flex-row-6">
                <div className="number-2 dmsans-bold-slate-gray-26px">{number3}</div>
                <div className="novel-products dmsans-bold-white-20px">{novelProducts}</div>
              </div>
              <div className="our-products-are-uni dmsans-normal-waterloo--18px">{ourProductsAreUni}</div>
            </div>
            <div className="group-251">
              <div className="flex-row-7">
                <div className="number-4 dmsans-bold-slate-gray-26px">{number4}</div>
                <div className="quantative-modeling dmsans-bold-white-20px">{quantativeModeling}</div>
              </div>
              <div className="our dmsans-normal-waterloo--18px">{allOurModelsThat}</div>
            </div>
          </div>
          <div className="overlap-group4">
            <img className="image-3" src={image3} />
          </div>
        </div>
        <div className="frame-269">
          <div className="flex-col-1">
            <div className="frame-280"></div>
            <div className="the-platform-of-my-dreams dmsans-normal-white-18px">{thePlatformOfMyDreams}</div>
          </div>
          <div className="flex-col-2">
            <div className="we-love-our-customers">{weLoveOurCustomers}</div>
            <div className="and-they-seem-to-love-us">{andTheySeemToLoveUs}</div>
            <div className="frame-281"></div>
            <div className="i-was-able-to-support-my-favorit dmsans-normal-white-18px">
              {iWasAbleToSupportMyFavorit}
            </div>
          </div>
          <div className="flex-col-3">
            <div className="frame-279"></div>
            <div className="within-minutes-i-had dmsans-bold-white-18px">{withinMinutesIHad}</div>
          </div>
        </div>
        <div className="frame-271">
          <div className="frame-265">
            <div className="frame-262">
              <div className="integrations dmsans-bold-winter-sky-16px">{integrations}</div>
              <div className="our-platform-will-in dmsans-bold-white-42px">{ourPlatformWillIn}</div>
            </div>
            <ButtonsPrimaryIcon
              tryItFree={buttonsPrimaryIconProps.tryItFree}
              iconsSolidRight={buttonsPrimaryIconProps.iconsSolidRight}
            />
          </div>
          <div className="group-container-2">
            <div className="group-271">
              <img className="image-8" src={image8} />
            </div>
            <div className="group-270">
              <img className="image-5" src={image5} />
            </div>
            <div className="group-267">
              <img className="image-6" src={image6} />
            </div>
            <div className="group-268">
              <img className="image-7" src={image7} />
            </div>
          </div>
        </div>
        <div className="frame-272">
          <div className="frame-268 dmsans-bold-waterloo--13px">
            <div className="copyright">{copyright}</div>
            <div className="terms">{terms}</div>
            <div className="privacy">{privacy}</div>
          </div>
          <div className="cookiesv1">
            <img className="cookie" src="/img/cookie@2x.svg" />
            <p className="by-using-our-website dmsans-normal-white-14px">
              <span className="dmsans-normal-white-14px">{spanText1}</span>
              <span className="span1 dmsans-normal-white-14px">{spanText2}</span>
              <span className="dmsans-normal-white-14px">{spanText3}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1920;
