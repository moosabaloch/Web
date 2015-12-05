/**
 * Created by Moosa on 12/4/2015.
 */
jQuery(document).ready(function () {
      jQuery("#cursor1").show();
    jQuery("#screentyped-1").typed({
        strings: ["Hello!"],
         stringsstops: [0],
          typeSpeed: 60,
           callback: function () {
            jQuery("#typed-cursor").remove();
            jQuery("#cursor2").show();
            jQuery("#screentyped-2").typed({
                strings: ["Mon nom est Ste", "Mon nom est Stéphane Martin."],
                stringsstops: [14, 0],
                typeSpeed: 50,
                callback: function () {
                    jQuery("#typed-cursor").remove();
                    jQuery("#cursor3").show();
                    jQuery("#screentyped-3").typed({
                        strings: ["Je suis intégrateur web freelance.", "Je suis dévell", "Je suis développeur web front-end."],
                        stringsstops: [8, 13, 0],
                        typeSpeed: 50,
                        callback: function () {
                            clearInterval(n);
                            clearInterval(r)
                        }
                    })
                }
            })
        }
    })
})