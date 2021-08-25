/*
 DES: Inital for all page
 Aut: DungDT2
*/

var init_page = {
    init: function () {
        $(document).ready(function () {

            if (typeof main !== "undefined") { // main business
                main.init();
            }

            if (typeof news_detail !== "undefined") { // news business
                news_detail.init();
            }

            if (typeof qa_page !== "undefined") { // Q&A list
                qa_page.init();
            }

            if (typeof qa_detail !== "undefined") { // Q&A detail
                qa_detail.init();
            }

        });
    }
};

// Execute inital page
init_page.init();