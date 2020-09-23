"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("./Header");
var react_helmet_1 = require("react-helmet");
var custom_styled_components_1 = require("../styles/custom-styled-components");
var Experience_1 = require("./Experience");
var Education_1 = require("./Education");
var Skills_1 = require("./Skills");
var Honors_1 = require("./Honors");
var Contact_1 = require("./Contact");
var particles_data_1 = require("../data/particles_data");
var Footer_1 = require("../components/Footer");
var SectionBar_1 = require("../components/SectionBar");
var react_particles_js_1 = require("react-particles-js");
require("../styles/index.sass");
var Main = function () {
    return (react_1["default"].createElement("section", { className: "hero is-default is-bold", id: "main" },
        react_1["default"].createElement(react_helmet_1.Helmet, null,
            react_1["default"].createElement("html", { lang: "en" }),
            react_1["default"].createElement("meta", { charSet: "utf-8" }),
            react_1["default"].createElement("title", null, "Hi, I'm Albert Alises"),
            react_1["default"].createElement("meta", { name: "description", content: "Personal Website of Albert Alises Sorribas" })),
        react_1["default"].createElement(custom_styled_components_1.FixedHeaderContainer, null,
            react_1["default"].createElement(react_particles_js_1["default"], { params: particles_data_1["default"], style: { position: 'fixed' } }),
            react_1["default"].createElement(Header_1["default"], { name: "Nicolas Perez de Olaguer", role: "Software Developer. VR, Web and whatnot" })),
        react_1["default"].createElement(custom_styled_components_1.ContentContainer, null,
            react_1["default"].createElement("div", { className: "column is-two-thirds is-offset-2" },
                react_1["default"].createElement(SectionBar_1["default"], null),
                react_1["default"].createElement(Experience_1["default"], null),
                react_1["default"].createElement(Education_1["default"], null),
                react_1["default"].createElement(Skills_1["default"], null),
                react_1["default"].createElement(Honors_1["default"], null),
                react_1["default"].createElement(Contact_1["default"], null))),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = Main;
