const countriesUkrainian = [
    "Australia",
    "Austria",
    "Argentina",
    "Bangladesh",
    "Belgium",
    "Bulgaria",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Brazil",
    "Vietnam",
    "United Kingdom",
    "Venezuela",
    "Germany",
    "Honduras",
    "Greece",
    "Georgia",
    "Denmark",
    "Egypt",
    "Ecuador",
    "Eswatini",
    "Estonia",
    "Israel",
    "India",
    "Iran",
    "Ireland",
    "Iceland",
    "Spain",
    "Italy",
    "Kazakhstan",
    "Canada",
    "Kenya",
    "China",
    "Kyrgyzstan",
    "Colombia",
    "Costa Rica",
    "Latvia",
    "Lithuania",
    "Liechtenstein",
    "Luxembourg",
    "Malaysia",
    "Malta",
    "Morocco",
    "Mexico",
    "Moldova",
    "Nigeria",
    "Netherlands",
    "Nicaragua",
    "Norway",
    "Pakistan",
    "Palau",
    "Paraguay",
    "Peru",
    "South Africa",
    "South Korea",
    "South Sudan",
    "North Korea",
    "Poland",
    "Portugal",
    "Russia",
    "Romania",
    "Saudi Arabia",
    "El Salvador",
    "San Marino",
    "Serbia",
    "Singapore",
    "Slovenia",
    "United States of America",
    "Sudan",
    "Tajikistan",
    "Thailand",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Hungary",
    "Ukraine",
    "Uzbekistan",
    "Uruguay",
    "Finland",
    "France",
    "Croatia",
    "Chad",
    "Czech Republic",
    "Chile",
    "Montenegro",
    "Switzerland",
    "Sweden",
    "Sri Lanka",
    "Jamaica",
    "Japan"
];

const languagesUkrainian = [
    "English",
    "Arabic",
    "Bengali",
    "Bulgarian",
    "Burmese",
    "Danish",
    "Estonian",
    "Hindi",
    "Greek",
    "Georgian",
    "Hebrew",
    "Icelandic",
    "Spanish",
    "Italian",
    "Kazakh",
    "Chinese",
    "Latvian",
    "Lithuanian",
    "Malaysian",
    "Maltese",
    "Netherlands",
    "German",
    "Persian",
    "Portuguese",
    "Russian",
    "Romanian",
    "Swazi",
    "Serbian",
    "Sinhalese",
    "Slovak",
    "Slovenian",
    "Turkish",
    "Ukrainian",
    "Uruguayan",
    "Finnish",
    "French",
    "Croatian",
    "Czech",
    "Chilean",
    "Swedish",
    "Japanese"
];

const countrySelect = $('#countrySelect');

countriesUkrainian.forEach(country => {
    countrySelect.append(`<option value="${country}">${country}</option>`);
});

const languageSelect = $('#languageSelect');

languagesUkrainian.forEach(language => {
    languageSelect.append(`<option value="${language}">${language}</option>`);
});

$(document).ready(function () {
    countrySelect.select2({
        theme: 'custom-theme',
        width: '100%'
    });

    languageSelect.select2({
        theme: 'custom-theme',
        width: '100%'
    });

    $('#select2-countrySelect-container').html('Select a GEO');
    $('#select2-languageSelect-container').html('Select a language');
});