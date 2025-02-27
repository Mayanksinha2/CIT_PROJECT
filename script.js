    $("#mySelect").change(function () { });

    //clipboard

    const textElement = document.getElementById("source");
    const copyButton = document.getElementById("copy");

    const copyText = (e) => {
        window.getSelection().selectAllChildren(textElement);
        document.execCommand("copy");
        e.target.setAttribute("tooltip", "Copied! ✅");
    };

    const resetTooltip = (e) => {
        e.target.setAttribute("tooltip", "Copy to clipboard");
    };

    copyButton.addEventListener("click", (e) => copyText(e));
    copyButton.addEventListener("mouseover", (e) => resetTooltip(e));




    // caching the elements
    var UserName = document.getElementById("UserName"),
        UserNameID = document.getElementById("UserNameID"),
        // Pronounce = document.getElementById("Pronounce"),
        // gender1 = document.getElementById("gender1"),

        Designation = document.getElementById("Designation"),
        DesignationID = document.getElementById("DesignationID"),
        phone = document.getElementById("phone"),
        CountryCodeID = document.getElementById("CountryCodeID"),
        CountactNo = document.getElementById("CountactNo"),
        CountactNoID = document.getElementById("CountactNoID"),
        textarea = document.getElementById("textarea"),
        par = document.getElementById("par"),
        phonenumbercountry = document.getElementById("phonenumbercountry"),
        code = document.getElementById("code"),
        phonenumber = document.getElementById("phonenumber"),
        num = document.getElementById("num");
    // country and Phone No.


    // the main function: get the content from source and display it in destination
    function display(source, destination) {
        destination.textContent = source;
    }
    // events
    UserName.onkeyup = function () {
        display(this.value, UserNameID);
    };

    Designation.onkeyup = function () {
        display(this.value, DesignationID);
    };

    // Pronounce.onkeyup = function () {
    //     display("(" + this.value + ")", gender1);
    // };
    // CountryCode.onkeyup = function () { display(this.value, CountryCodeID); };

    phone.onkeyup = function () {
        display(this.value, CountryCodeID);
    };

    // CountactNo.onkeyup = function () { display(this.value, CountactNoID); };

    // phonenumbercountry.onkeyup = function () { display(this.value, code); };

    // phonenumber.onkeyup = function () { display(this.value, num); };

    // Telephone no

    var input = document.querySelector("#phone"),
        errorMsg = document.querySelector("#error-msg"),
        validMsg = document.querySelector("#valid-msg");

    // Error messages based on the code returned from getValidationError
    var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

    // Initialise plugin
    var intl = window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                success(countryCode);
            });
        },
        // utilsScript: "js/utils.js"
    });

    document.getElementById("mySelect").addEventListener("change", function () {
        var selectedOption = document.getElementById("mySelect").value;
        var listItems = document.getElementById("myList").querySelectorAll("td");
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active");
        }
        listItems[selectedOption - 1].classList.add("active");
        $(".remove_css").css({
            "fontWeight": "",
            "color": ""
        });
        $(".active").children("span").css({
            "fontWeight": "bold",
            "color": "#2c68a5"
        });
    });
    // code show

    function show_code() {
        $("#destination").html($("#source").html().escape());
    }

    String.prototype.escape = function () {
        var tagsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return this.replace(/[&<>]/g, function (tag) {
            return tagsToReplace[tag] || tag;
        });
    };

    // form update

    $('#form').submit(function (e) {
        $('#UserNameID').text($("#UserName").val());
        $('#DesignationID').text($("#Designation").val());
        $('#CountactNoID').text($("#phone").val());
        $('#myList').select($("#mySelect").val());

        // Prevent reload page
        e.preventDefault();
    });

    function copyFunction() {
        const copyText = document.getElementById("copycode").textContent;
        const textArea = document.createElement('textarea');

        var custumheader = "<!doctype html>\n" +
            "<html>\n" +
            "<head>\n" +
            "<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\">\n" +
            "<meta name=\"format-detection\" content=\"telephone=no,date=no,address=no,email=no\">\n" +
            "<meta name=\"autolink\" content=\"no\">\n" +
            "<meta name=\"x-apple-disable-message-reformatting\">\n" +
            "<title>Signature</title>\n" +
            "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n" +
            "<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n" +
            "<link href=\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap\" rel=\"stylesheet\">\n" +
            "<style>\n" +
            "v:* {\n" +
            "behavior: url(#default#VML);\n" +
            "display: inline-block;\n" +
            "}\n" +
            "body,\n" +
            "table,\n" +
            "td,\n" +
            "a {\n" +
            "-webkit-text-size-adjust: 100%;\n" +
            "-ms-text-size-adjust: 100%;\n" +
            "}\n" +
            "table,\n" +
            "td {\n" +
            "mso-table-lspace: 0pt;\n" +
            "mso-table-rspace: 0pt;\n" +
            "}\n" +
            "img {\n" +
            "-ms-interpolation-mode: bicubic;\n" +
            "}\n" +
            "/* iOS BLUE LINKS */\n" +
            "a[x-apple-data-detectors] {\n" +
            "color: inherit !important;\n" +
            "text-decoration: none !important;\n" +
            "font-size: inherit !important;\n" +
            "font-family: inherit !important;\n" +
            "font-weight: inherit !important;\n" +
            "line-height: inherit !important;\n" +
            "}\n" +
            ".cta-text a {\n" +
            "color: #ffffff;\n" +
            "}\n" +
            ".footer a {\n" +
            "color: #0468ce;\n" +
            "}\n" +
            "p a {\n" +
            "color: #0563C1;\n" +
            "}\n" +
            "tr.city-selection td.active {\n" +
            "color: #2c68a5 !important;\n" +
            "font-weight: bold !important;\n" +
            "}\n" +
            "</style>\n" +
            "<!--[if (mso)|(mso 16)]>\n" +
            "<style type=\"text/css\">\n" +
            "a{text-decoration: none;}\n" +
            "</style>\n" +
            "<![endif]-->\n" +
            "</head>\n" +
            "<body style=\"background-color: #ffffff; margin: 0; padding: 0;\">\n";

        custufooter = "</body>\n" +
            "</html>\n";

        var copyText1 = custumheader + copyText + custufooter;
        var el = document.createElement('textarea');
        el.value = copyText1;
        el.setAttribute('readonly', '');
        el.style = {
            position: 'absolute',
            left: '-9999px'
        };
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    document.getElementById('button').addEventListener('click', copyFunction);

    $("#phone").keyup(function () {
        $('#CountryCodeID1').text(intl.selectedCountryData['dialCode']);
    });
