function showElem(elemName) {
    $('#' + elemName).show();
}
function getImg(evt) {
    if (evt.target.files[0].size > 100000 || evt.target.files[0].size < 20000) {
        event.target.value = null;
        alert('upload file limit is 20Kb to 100kb')
    }
}
function roundNumber(elemName) {
    const input = parseInt($(elemName)[0].value, 10)
    if (input <= 10) {
        $(elemName)[0].value = input.toFixed(1).toString()
    } else {
        $(elemName)[0].value = (input.toFixed(2)).toString()
    }
}

$(document).ready(function () {


    try {
        var selectSimple = $('.js-select-simple');

        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });

    } catch (err) {
        console.log(err);
    }
    $('#showsscmarkinput').hide();



    $("select-nationality").select2();
    $("select-stateut").select2();
    $("select-district").select2();

    var formatDate = new Date();
    formatDate.setFullYear(formatDate.getFullYear() - 18);
    var maxDate = formatDate.toISOString().split('T')[0];
    document.getElementById("dob").setAttribute('max', maxDate);
    $('#other-nationality').hide();
    $('#other-stateut').hide();
    $('#other-district').hide();
    $('#other-areaofinterest').hide();
    $('#ssc').hide();
    $('#hsc').hide();
    $('#diploma').hide();
    $('#grad').hide();
    $('#postgrad').hide();
    $('#postgraddiploma').hide();
    $('#profdegree').hide();
    $('#showsscmarkinput').hide();
    $('#showhscmarkinput').hide();
    $('#showdiplomamarkinput').hide();
    $('#showgradmarkinput').hide();
    $('#showpostgradmarkinput').hide();
    $('#showpostgraddiplomamarkinput').hide();
    $('#showprofdegreemarkinput').hide();
    $('#other-ssc').hide();
    $('#other-hsc').hide();
    $('#other-diploma').hide();
    $('#other-grad').hide();
    $('#other-postgrad').hide();
    $('#other-postgraddiploma').hide();
    $('#other-graddegree').hide();
    $('#other-postgraddegree').hide();
    $('#other-profdegreedegree').hide();
    $('#showgradpercsec').hide()
    $('#showpostgradpercsec').hide()
    $('#showpostgraddiplomapercsec').hide()
    $('select[name=nationality]').change(function () {
        $('#other-nationality').hide();
        $("select[name=nationality] option:selected").each(function () {
            var value = $(this).val();
            if (value == "Other") {
                $('#other-nationality').show();
            } else {
                $('#other-nationality').hide();
            }

        });
        $('#other-stateut').hide();
    });
    $('select[name=stateut]').change(function () {
        $("select[name=stateut] option:selected").each(function () {
            var value = $(this).val();
            if (value == "Other") {
                $('#other-stateut').show();
            } else {
                $('#other-stateut').hide();
            }

        });
    });
    $('select[name=district]').change(function () {
        $("select[name=district] option:selected").each(function () {
            var value = $(this).val();
            if (value == "Other") {
                $('#other-district').show();
            } else {
                $('#other-district').hide();
            }

        });
    });
    $('select[name=areaofinterest]').change(function () {
        $("select[name=areaofinterest] option:selected").each(function () {
            var value = $(this).val();
            if (value == "Other") {
                $('#other-areaofinterest').show();
            } else {
                $('#other-areaofinterest').hide();
            }

        });
    });
    $('select[name=eduinfo]').change(function () {
        $("select[name=eduinfo] option:selected").each(function () {
            var value = $(this).val();

            $('#ssc').hide();
            $('#hsc').hide();
            $('#diploma').hide();
            $('#grad').hide();
            $('#postgrad').hide();
            $('#postgraddiploma').hide();
            $('#profdegree').hide();
            if (value == 'ssc') {
                $('#ssc').show();
                $('#hsc').hide();
                $('#diploma').hide();
                $('#grad').hide();
                $('#postgrad').hide();
                $('#postgraddiploma').hide();
                $('#profdegree').hide();
            } else if (value == "hsc") {
                $('#hsc').show();
                $('#ssc').hide();
                $('#diploma').hide();
                $('#grad').hide();
                $('#postgrad').hide();
                $('#postgraddiploma').hide();
                $('#profdegree').hide();
            } else if (value == 'diploma') {
                $('#diploma').show();
                $('#ssc').hide();
                $('#hsc').hide();
                $('#grad').hide();
                $('#postgrad').hide();
                $('#postgraddiploma').hide();
                $('#profdegree').hide();
            } else if (value == 'grad') {
                $('#grad').show();
                $('#ssc').hide();
                $('#hsc').hide();
                $('#diploma').hide();
                $('#postgrad').hide();
                $('#postgraddiploma').hide();
                $('#profdegree').hide();
            } else if (value == 'postgrad') {
                $('#hsc').hide();
                $('#ssc').hide();
                $('#diploma').hide();
                $('#grad').hide();
                $('#postgrad').show();
                $('#postgraddiploma').hide();
                $('#profdegree').hide();
            } else if (value == 'postgraddiploma') {
                $('#hsc').hide();
                $('#ssc').hide();
                $('#diploma').hide();
                $('#grad').hide();
                $('#postgrad').hide();
                $('#postgraddiploma').show();
                $('#profdegree').hide();
            } else if (value == 'profdegree') {
                $('#hsc').hide();
                $('#ssc').hide();
                $('#diploma').hide();
                $('#grad').hide();
                $('#postgrad').hide();
                $('#postgraddiploma').hide();
                $('#profdegree').show();
            }

        });

        $('select[name=ssc]').change(function () {
            $("select[name=ssc] option:selected").each(function () {
                var value = $(this).val();
                if (value == "Other") {
                    $('#other-ssc').show();
                } else {
                    $('#other-ssc').hide();
                }

            });
        });


        $('select[name=hsc]').change(function () {
            $("select[name=hsc] option:selected").each(function () {
                var value = $(this).val();
                if (value == "Other") {
                    $('#other-hsc').show();
                } else {
                    $('#other-hsc').hide();
                }

            });
        });

        $('select[name=diploma]').change(function () {
            $("select[name=diploma] option:selected").each(function () {
                var value = $(this).val();
                if (value == "Other") {
                    $('#other-diploma').show();
                } else {
                    $('#other-diploma').hide();
                }

            });
        });

        $('select[name=grad]').change(function () {
            $("select[name=grad] option:selected").each(function () {
                var value = $(this).val();
                if (value == "Other") {
                    $('#other-grad').show();
                } else {
                    $('#other-grad').hide();
                }

            });
        });

        $('select[name=postgrad]').change(function () {
            $("select[name=postgrad] option:selected").each(function () {
                var value = $(this).val();
                if (value == "Other") {
                    $('#other-postgrad').show();
                } else {
                    $('#other-postgrad').hide();
                }

            });
        });

        $('select[name=postgraddiploma]').change(function () {
            $("select[name=postgraddiploma] option:selected").each(function () {
                var value = $(this).val();
                if (value == "Other") {
                    $('#other-postgraddiploma').show();
                } else {
                    $('#other-postgraddiploma').hide();
                }

            });
        });
        $('select[name=graddegree]').change(function () {
            $("select[name=graddegree] option:selected").each(function () {
                var value = $(this).val();
                if (value == "Other") {
                    $('#other-graddegree').show();
                } else {
                    $('#other-graddegree').hide();
                }

            });
        });
        $('select[name=postgraddegree]').change(function () {
            $("select[name=postgraddegree] option:selected").each(function () {
                var value = $(this).val();
                if (value == "Other") {
                    $('#other-postgraddegree').show();
                } else {
                    $('#other-postgraddegree').hide();
                }

            });
        });
        $('select[name=profdegreedegree]').change(function () {
            $("select[name=profdegreedegree] option:selected").each(function () {
                var value = $(this).val();
                if (value == "Other") {
                    $('#other-profdegreedegree').show();
                } else {
                    $('#other-profdegreedegree').hide();
                }

            });
        });
    });

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

        current_fs = $(this).parent().parent().parent();
        next_fs = $(this).parent().parent().parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $(".previous").click(function () {

        current_fs = $(this).parent().parent().parent();
        previous_fs = $(this).parent().parent().parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function () {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function () {
        return false;
    })

});
