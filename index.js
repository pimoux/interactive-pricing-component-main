let pageviewsDesktop = document.querySelector("#pageviews-desktop");
let pricesDesktop = document.querySelector("#price-desktop");
let pageviewsMobile = document.querySelector("#pageviews-mobile");
let pricesMobile = document.querySelector("#price-mobile");
let period_check_box = document.querySelector("#checkbox");
let rangeDesktop = document.querySelector("#range-desktop");
let rangeMobile = document.querySelector("#range-mobile");
let isYearly = false;

function updatePrice(choice, isYearly) {
  const nb_page_views = {
    0: "10K PAGEVIEWS",
    25: "50K PAGEVIEWS",
    50: "100K PAGEVIEWS",
    75: "500K PAGEVIEWS",
    100: "1M PAGEVIEWS",
  };
  const prices = {
    0: isYearly
      ? "$6.00 &nbsp;<span>/ month</span>"
      : "$8.00 &nbsp;<span>/ month</span>",
    25: isYearly
      ? "$9.00 &nbsp;<span>/ month</span>"
      : "$12.00 &nbsp;<span>/ month</span>",
    50: isYearly
      ? "$12.00 &nbsp;<span>/ month</span>"
      : "$16.00 &nbsp;<span>/ month</span>",
    75: isYearly
      ? "$18.00 &nbsp;<span>/ month</span>"
      : "$24.00 &nbsp;<span>/ month</span>",
    100: isYearly
      ? "$27.00 &nbsp;<span>/ month</span>"
      : "$36.00 &nbsp;<span>/ month</span>",
  };
  pageviewsDesktop.innerHTML = nb_page_views[choice.value];
  pricesDesktop.innerHTML = prices[choice.value];
  pageviewsMobile.innerHTML = nb_page_views[choice.value];
  pricesMobile.innerHTML = prices[choice.value];
}

period_check_box.addEventListener("change", () => {
  isYearly = !isYearly;
  updatePrice(rangeDesktop, isYearly);
});
rangeDesktop.addEventListener(
  "input",
  () => {
    updatePrice(rangeDesktop, isYearly);
    rangeMobile.value = rangeDesktop.value;
  },
  false
);

rangeMobile.addEventListener(
  "input",
  () => {
    updatePrice(rangeMobile, isYearly);
    rangeDesktop.value = rangeMobile.value;
  },
  false
);
