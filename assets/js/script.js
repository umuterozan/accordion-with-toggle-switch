const accordionItemHeader = document.querySelectorAll(".accordion-item-header");
const accordionItemToggleSwitch = document.querySelectorAll(
    ".accordion-item-toggle-switch"
);

accordionItemHeader.forEach((accordionItemHeader) => {
    accordionItemHeader.firstElementChild.addEventListener("click", () => {
        if (
            accordionItemHeader.lastElementChild.lastElementChild
                .firstElementChild.checked === true &&
            accordionItemHeader.classList.contains("active")
        ) {
            return false;
        }

        const currentlyActiveAccordionItemHeader = document.querySelector(
            ".accordion-item-header.active"
        );
        if (
            currentlyActiveAccordionItemHeader &&
            currentlyActiveAccordionItemHeader !== accordionItemHeader
        ) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight =
                accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

accordionItemToggleSwitch.forEach((accordionItemToggleSwitch) => {
    accordionItemToggleSwitch.addEventListener("click", (e) => {
        e.preventDefault();
        if (accordionItemToggleSwitch.firstElementChild.checked === false) {
            accordionItemToggleSwitch.previousElementSibling.classList.toggle(
                "active"
            );
            accordionItemToggleSwitch.firstElementChild.checked = true;
            accordionItemToggleSwitch.previousElementSibling.textContent =
                "Turned On";
        } else {
            accordionItemToggleSwitch.previousElementSibling.classList.toggle(
                "active"
            );
            accordionItemToggleSwitch.firstElementChild.checked = false;
            accordionItemToggleSwitch.previousElementSibling.textContent =
                "Turned Off";
        }
    });
});
