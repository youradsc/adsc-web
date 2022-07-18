import React from "react";
import TinyBarChartShowCartesianGridShowXA from "../TinyBarChartShowCartesianGridShowXA";
import ChartTitle from "../ChartTitle";
import TinyLineChartShowCartesianGridShowX from "../TinyLineChartShowCartesianGridShowX";
import TinyLineChartShowCartesianGridShowX2 from "../TinyLineChartShowCartesianGridShowX2";
import TinyLineChartShowCartesianGridShowX3 from "../TinyLineChartShowCartesianGridShowX3";
import SimpleBarChartShowCartesianGridShow from "../SimpleBarChartShowCartesianGridShow";
import SimpleDonutChartShowTooltipShowLege from "../SimpleDonutChartShowTooltipShowLege";
import "./Dash1.css";
import {NavLink as Link } from "react-router-dom"

function Dash1(props) {
  const {
    rightcolumnimg1,
    rightcolumnimg2,
    welcomeToYourDashboard,
    tryOurNewAdminDa,
    chartTitle1,
    x110SinceYesterday1,
    chartTitle2,
    text3,
    x110SinceYesterday2,
    x110SinceYesterday3,
    chartTitle3,
    chartTitle4,
    x110SinceYesterday4,
    chartTitleProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dash1 screen">
      <div >
              <nav>
                <ul className="navbar">
                  <li className="navbar-link-text-1 inter-medium-mischka-14px">
                    <Link className="navbar-link-text inter-medium-mischka-14px" to="/">Home</Link>
                    </li>
                  <li className="navbar-link-text-1 inter-medium-mischka-14px">
                    <Link className="navbar-link-text-1 inter-medium-mischka-14px" to="/">Products
                    </Link>
                    </li>
                    <li className="navbar-link-text-1 inter-medium-mischka-14px">
                    <Link className="navbar-link-text-1 inter-medium-mischka-14px" to="/dash1">Dashboard
                    </Link>
                    </li>
                    <li className="navbar-link-text-1 inter-medium-mischka-14px">
                    <Link className="navbar-link-text-1 inter-medium-mischka-14px" to="/dash2">Dashboard2
                    </Link>
                    </li>
                </ul>
              </nav>
            </div>
        <div className="strip1">
          <div className="promo-box">
            <div className="right-column-img" style={{ backgroundImage: `url(${rightcolumnimg1})` }}>
              <div className="right-column-img-1" style={{ backgroundImage: `url(${rightcolumnimg2})` }}></div>
            </div>
            <div className="left-column">
              <div className="welcome-to-your-dashboard">{welcomeToYourDashboard}</div>
              <p className="try-our-new-admin-da">{tryOurNewAdminDa}</p>
            </div>
          </div>
          <div className="x-small-data-box">
            <div className="chart-title mulish-semi-bold-cararra-16px">{chartTitle1}</div>
            <TinyBarChartShowCartesianGridShowXA />
          </div>
        </div>
        <div className="strip2">
          <div className="xx-small-data-box">
            <div className="left-column-1">
              <ChartTitle />
              <div className="bottm-text">
                <img className="arrow_upward" src="/img/arrow-upward-1@2x.svg" />
                <div className="x110-since-yesterday mulish-normal-cararra-12px">{x110SinceYesterday1}</div>
              </div>
            </div>
            <TinyLineChartShowCartesianGridShowX />
          </div>
          <div className="xx-small-data-box-1">
            <div className="flex-col-4">
              <div className="left-column-2">
                <div className="chart-title-1 mulish-semi-bold-cararra-12px">{chartTitle2}</div>
                <div className="text-3 mulish-bold-cararra-24px">{text3}</div>
              </div>
              <div className="bottm-text-1">
                <img className="arrow_upward" src="/img/arrow-upward-2@2x.svg" />
                <div className="x110-since-yesterday-1 mulish-normal-cararra-12px">{x110SinceYesterday2}</div>
              </div>
            </div>
            <TinyLineChartShowCartesianGridShowX2 />
          </div>
          <div className="xx-small-data-box-2">
            <div className="left-column-3">
              <ChartTitle className={chartTitleProps.className} />
              <div className="bottm-text-2">
                <img className="arrow_upward-1" src="/img/arrow-upward-3@2x.svg" />
                <div className="x110-since-yesterday-2 mulish-normal-cararra-12px">{x110SinceYesterday3}</div>
              </div>
            </div>
            <TinyLineChartShowCartesianGridShowX3 />
          </div>
        </div>
        <div className="strip3">
          <div className="x-large-data-box">
            <div className="chart-title-2 mulish-semi-bold-cararra-16px">{chartTitle3}</div>
            <SimpleBarChartShowCartesianGridShow />
          </div>
          <div className="medium-data-box">
            <div className="top-text">
              <div className="chart-title-3 mulish-semi-bold-cararra-16px">{chartTitle4}</div>
              <div className="right-text">
                <img className="arrow_upward-2" src="/img/arrow-upward@2x.svg" />
                <div className="x110-since-yesterday-3 mulish-normal-cararra-12px">{x110SinceYesterday4}</div>
              </div>
            </div>
            <SimpleDonutChartShowTooltipShowLege />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash1;
