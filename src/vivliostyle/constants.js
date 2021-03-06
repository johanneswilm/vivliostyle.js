/**
 * Copyright 2015 Vivliostyle Inc.
 * @fileoverview Constants
 */
goog.provide("vivliostyle.constants");

goog.require("vivliostyle.namespace");

goog.scope(function() {
    /**
     * Page progression direction.
     * @enum {string}
     */
    vivliostyle.constants.PageProgression = {
        LTR: "ltr",
        RTL: "rtl"
    };
    var PageProgression = vivliostyle.constants.PageProgression;

    /**
     * Return PageProgressino corresponding to the specified string
     * @param {string} str
     * @returns {vivliostyle.constants.PageProgression}
     */
    vivliostyle.constants.PageProgression.of = function(str) {
        switch (str) {
            case "ltr":
                return PageProgression.LTR;
            case "rtl":
                return PageProgression.RTL;
            default:
                throw new Error("unknown PageProgression: " + str);
        }
    };

    vivliostyle.namespace.exportSymbol("vivliostyle.constants.PageProgression", PageProgression);
    goog.exportProperty(PageProgression, "LTR", PageProgression.LTR);
    goog.exportProperty(PageProgression, "RTL", PageProgression.RTL);

    /**
     * Page side (left/right).
     * @enum {string}
     */
    vivliostyle.constants.PageSide = {
        LEFT: "left",
        RIGHT: "right"
    };
    var PageSide = vivliostyle.constants.PageSide;
    vivliostyle.namespace.exportSymbol("vivliostyle.constants.PageSide", PageSide);
    goog.exportProperty(PageSide, "LEFT", PageSide.LEFT);
    goog.exportProperty(PageSide, "RIGHT", PageSide.RIGHT);
});
