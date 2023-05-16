(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.defer = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("body")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0738/3436/5229/t/3/assets/appstle-subscription.js?v=1684163583");


      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent .customer.account > div:nth-child(2) > div:nth-child(2) > h2",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "true",
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "Single Test",
        "shop": "goperi.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Subscribe and save $20",
        "sellingPlanSelectTitle": "",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Subscription detail",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your subscriptions<\/strong><br\/><br\/>Skip, reschedule, edit, or cancel deliveries anytime, based on your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "sellingPlansJson": [{"frequencyCount":6,"frequencyInterval":"MONTH","billingFrequencyCount":6,"billingFrequencyInterval":"MONTH","frequencyName":"Subscribe \u0026 Save $20","frequencyDescription":"1 test every 6 months","afterCycle1":0,"afterCycle2":0,"discountEnabled":false,"discountEnabled2":false,"discountEnabledMasked":false,"discountEnabled2Masked":false,"id":"gid://shopify/SellingPlan/685276856621","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/685276856621","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":6,"frequencyInterval":"MONTH","billingFrequencyCount":6,"billingFrequencyInterval":"MONTH","frequencyName":"Subscribe and Save $20","frequencyDescription":"1 test every 6 months","discountOffer":20.0,"afterCycle1":0,"discountType":"FIXED","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/685446594861","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/685446594861","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","appstleCycles":[]}],
        "widgetEnabled": true,
        "showTooltip" : false,
        "sortByDefaultSequence": true,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": true,
        "sellingPlanTitleText" : "",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : " {{totalPrice}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 163,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "true",
        "switchRadioButtonWidget": false,
        "appstlePlanName": "BUSINESS",
        "appstlePlanFeatures": {
	"accessAdvancedCustomerPortalSettings": false,
	"accessAdvanceSubscriptionPlanOptions": true,
	"accessAppstleMenu": true,
	"accessBuildABox": true,
	"accessBundling": true,
	"accessDiscountOnCancellationAttempt": true,
	"accessKlaviyoContactSync": true,
	"accessKlaviyoEmailIntegration": true,
	"accessGorgiasIntegration": true,
	"accessMechanicsIntegration": true,
	"accessZapierIntegration": true,
	"accessShopifyFlowIntegration": true,
	"accessManualSubscriptionCreation": true,
	"accessOneTimeProductUpsells": true,
	"accessQuickCheckout": true,
	"accessResendEmail": true,
	"accessSplitContract": true,
	"accessSubscriberLoyaltyFeatures": true,
	"accessSubscriptionActivityLogs": true,
	"accessWidgetDesignOptions": true,
	"analytics": true,
	"enableAdvancedSellingPlans": true,
	"enableAutomation": true,
	"enableAutoSync": false,
	"enableBundling": true,
	"enableCancellationManagement": true,
	"enableCartWidget": true,
	"enableCustomEmailDomain": true,
	"enableCustomEmailHtml": true,
	"enableCustomerPortalSettings": true,
	"enableDunningManagement": true,
	"enableExternalApi": false,
	"enableIntegrations": true,
	"enableProductSwapAutomation": false,
	"enableQuickActions": true,
	"enableShippingProfiles": true,
	"enableSmsAlert": true,
	"enableSubscriptionManagement": true,
	"enableSummaryReports": true,
	"enableWidgetPlacement": true,
	"subscriptionOrderAmount": 100000,
	"webhookAccess": false
},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "false",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "false",
        "reBuyEnabled": "false",
        "loyaltyDetailsLabelText": "",
        "loyaltyPerkDescriptionText": "",
        "widgetTemplateHtml": `{% raw %}{% endraw %}`,
        "bundle": {},
        "labels": "{\"appstle.subscription.wg.yearsFrequencyTextV2\":\"Years\",\"appstle.subscription.wg.weekFrequencyTextV2\":\"Week\",\"appstle.subscription.wg.oneTimePurchaseTextV2\":\"One Time Purchase\",\"appstle.subscription.wg.loyaltyPerkDescriptionTextV2\":\"{{#isDiscountTypeFreeProduct}}<div style='display: flex;'><div style='height: 60px; width: 60px; flex-shrink: 0; margin-right: 10px;'><img style='width: 100%' src={{{featured_image}}}><\/img><\/div><div>After {{{billingCycleBlock}}} orders,<span style='color: #ffc000;font-weight: 700;';> get a FREE {{freeProductName}} <\/span><\/div><div>{{\/isDiscountTypeFreeProduct}}{{#isDiscountTypePercentage}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{discount}}}% OFF your entire order<\/span><\/span>.{{\/isDiscountTypePercentage}}{{#isDiscountTypeShipping}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>shipping at {{{formatDiscountedPrice}}}<\/span><\/span>.{{\/isDiscountTypeShipping}}{{#isDiscountTypeFixed}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{formatDiscountedPrice}}} OFF your entire order<\/span><\/span>.{{\/isDiscountTypeFixed}}\",\"appstle.subscription.wg.unsubscribeFrequencyTextV2\":\"unsubscribe\",\"appstle.subscription.wg.weeksFrequencyTextV2\":\"Weeks\",\"appstle.subscription.wg.weeklyLabelTextV2\":\"Weekly\",\"appstle.subscription.wg.oneTimeFrequencyTextV2\":\"One Time\",\"appstle.subscription.wg.dayFrequencyTextV2\":\"day\",\"appstle.subscription.wg.allowFulfilmentCountViaPropertiesV2\":\"false\",\"appstle.subscription.wg.monthsFrequencyTextV2\":\"Months\",\"appstle.subscription.wg.deliveryEveryFrequencyTextV2\":\"Delivery Every\",\"appstle.subscription.wg.subscribeAndSaveInitalV2\":\"Subscribe & save\",\"appstle.subscription.wg.offFrequencyTextV2\":\"Off\",\"appstle.subscription.wg.yearFrequencyTextV2\":\"Year\",\"appstle.subscription.wg.daysFrequencyTextV2\":\"Days\",\"appstle.subscription.wg.monthlyLabelTextV2\":\"Monthly\",\"appstle.subscription.wg.prepayLabelTextV2\":\"Prepay\",\"appstle.subscription.wg.subscribeAndSaveSuccessV2\":\"Subscribe success\",\"appstle.subscription.wg.monthFrequencyTextV2\":\"Month\",\"appstle.subscription.wg.selectDeliverOptionV2\":\"select deliver option\",\"appstle.subscription.wg.yearlyLabelTextV2\":\"Yearly\"}",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_subscription_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "#appstle_subscription_widget0 {\n   max-width: 100% !important;\n}\n\n#appstle_subscription_widget0 .appstle_subscription_wrapper {\n    border: none !important;\n}\n\n#appstle_subscription_widget0 .appstle_hide_subsOption {\n    opacity: unset;\n    padding-top: 25px !important;\n    visibility: visible;\n    height: auto;\n}\n\n.appstle_subscription_wrapper_option {\n     border: solid 3px #8FCAE4 !important;\n    border-radius: 35px;\n}\n\n.appstle_one_time_text,\n.appstle_subscribe_save_text,\n.appstle_subscription_amount  {\n   font-family: \"Acumin-Pro\" !important;\n   font-size: 22px !important;\n}\n\n.appstle_one_time_text,\n.appstle_subscribe_save_text {\n   margin-left: 18px;\n}\n\n#appstle_subscription_widget0 .appstle_circle {\n    height: 27px;\n    width: 27px;\n    border: 2px solid #8FCAE4;\n}\n\n#appstle_subscription_widget0 .appstle_subscription_wrapper_option input[type=radio]:checked + label .appstle_circle .appstle_dot {\n    height: 17px;\n    width: 17px;\n    background-color: #7CCCE7;\n}\n#appstle_subscription_widget0 .appstle_subscription_wrapper_option {\n    margin-top: 26px;\n}\n.appstleSellingPlanDescription {\n   font-family: \"Acumin-Pro\" !important;\n   font-size: 18px !important;\n}\n.appstle_subscription_amount_wrapper .appstle_subscription_amount {\n    position: absolute;\n    right: 16px;\n    bottom: 16px;\n}\n.appstle_circle:before {\n    display: none !important;\n}\n#appstle_subscription_widget0 .appstle_subscribe_option {\n    margin-left: 55px;\n    padding-top: 25px;\n    margin-top: 0px;\n    border-top: solid 1px #8FCAE4;\n}\n#appstle_subscription_widget0 .appstle_hide_subsOption {\n   padding-top: 0px;\n}\n#appstle_subscription_widget0 .appstle_subscription_wrapper {\n      margin-top: 55px;\n }\n@media(max-width: 1000px) {\n\n  .appstle_one_time_text,\n  .appstle_subscribe_save_text,\n  .appstle_subscription_amount {\n    font-size: 16px !important;\n  }\n\n  .appstleSellingPlanDescription {\n    font-size: 12px !important;\n  }\n\n  #appstle_subscription_widget0 .appstle_circle {\n    height: 16px;\n    width: 16px;\n  }\n\n  #appstle_subscription_widget0 .appstle_subscription_wrapper_option input[type=radio]:checked+label .appstle_circle .appstle_dot {\n    height: 10px;\n    width: 10px;\n    background-color: #7CCCE7;\n  }\n   #appstle_subscription_widget0 .appstle_subscribe_option {\n     margin-left: 34px;\n   }\n   .appstle_one_time_text, .appstle_subscribe_save_text {\n      margin-left: 8px;\n   }\n   .appstle_subscription_wrapper_option {\n    border: solid 2px #8FCAE4 !important;\n   }\n}",
            "elementCSS": "[]",
            "customerPortalCss": "",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

