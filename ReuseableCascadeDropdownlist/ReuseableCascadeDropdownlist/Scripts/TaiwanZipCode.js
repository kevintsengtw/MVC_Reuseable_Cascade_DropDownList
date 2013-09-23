;
(function (window) {
    //===========================================================================================
    if (typeof (jQuery) === 'undefined') { alert('jQuery Library NotFound.'); return; }

    var TaiwanZipCode = window.TaiwanZipCode =
    {
        ActionUrls: {}
    };
    //===========================================================================================

    jQuery.extend(TaiwanZipCode, {

        Initialize: function (actionUrls) {
            /// <summary>初始化函式</summary>
            /// <param name="actionUrls" type="Object"></param>

            jQuery.extend(TaiwanZipCode.ActionUrls, actionUrls);
        },

        Settings: function (options) {

            //var options = {
            //    CityID: '縣市下拉選單 Tag ID',
            //    CountyID: '鄉鎮市區下拉選單 Tag ID',
            //    SelectedCity: '已選擇縣市',
            //    SelectedCounty: '已選擇鄉鎮市區'
            //};

            TaiwanZipCode.SetCityDropDownlist(options.CityID, options.SelectedCity);
            $(options.CityID).change(function () {
                TaiwanZipCode.SetCountyDropDownlist(options.CityID, options.CountyID, options.SelectedCounty);
            });
            $(options.CityID).trigger('change');
        },

        SetCityDropDownlist: function (cityDropDownListID, selectedCityCode) {
            /// <summary>設定縣市下拉選單</summary>
            /// <param name="cityDropDownListID" type="Object">縣市下拉選單ID</param>
            /// <param name="selectedCityCode" type="Object">預選縣市編號</param>

            $(cityDropDownListID).empty().append($('<option></option>').val('').text('請選擇'));
            $.ajax({
                url: TaiwanZipCode.ActionUrls.GetCityDropDownlist,
                data: { selectedCity: selectedCityCode },
                type: 'post',
                cache: false,
                async: false,
                dataType: 'html',
                success: function (data) {
                    if (data.length > 0) {
                        $(cityDropDownListID).append(data);
                    }
                }
            });
        },

        SetCountyDropDownlist: function (cityDropDownListID, countyDropDownListID, selectedPostalCode) {
            /// <summary>設定鄉鎮市區下拉選單</summary>
            /// <param name="cityDropDownListID" type="Object">縣市下拉選單ID</param>
            /// <param name="countyDropDownListID" type="Object">鄉鎮市區下拉選單ID</param>
            /// <param name="selectedPostalCode" type="Object">預選鄉鎮市區號</param>

            var selectedCity = $.trim($(cityDropDownListID + ' option:selected').val());
            $(countyDropDownListID).empty().append($('<option></option>').val('').text('請選擇'));
            $.ajax({
                url: TaiwanZipCode.ActionUrls.GetCountyDropDownlist,
                data: { cityName: selectedCity, selectedCounty: selectedPostalCode },
                type: 'post',
                cache: false,
                async: false,
                dataType: 'html',
                success: function (data) {
                    if (data.length > 0) {
                        $(countyDropDownListID).append(data);
                    }
                }
            });
        }

    });
})
(window);
