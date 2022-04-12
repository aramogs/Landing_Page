

  let table2
let reloadCounter=0
  let btnExcelDownloadCon = document.getElementById("btnExcelDownloadCon")

  btnExcelDownloadCon.addEventListener("click", () => {

    table2.button('0').trigger()
  
  })


$(document).ready(function () {



    let selectCurrentWeek = function () {
        window.setTimeout(function () {
            $('.week-picker').find('.ui-datepicker-current-day a').addClass('ui-state-active')
        }, 1);
    }

    $('.week-picker').datepicker({
        dateFormat: 'yy-mm-dd',
        showOtherMonths: true,
        selectOtherMonths: true,
        firstDay: 1,
        showWeek: true,
        onSelect: function (dateText, inst) {
            let date = $(this).datepicker('getDate');
            momentdate = moment(date)
            week_day = momentdate.weekday()
            let sumdays1
            let sumdays2
            if (week_day == 0) { sumdays1 = -6, sumdays2 = 0 } else { sumdays1 = +1, sumdays2 = +7 }

            startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + sumdays1);
            endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + sumdays2);
            let dateFormat = inst.settings.dateFormat || $.datepicker._defaults.dateFormat;
            $('#startDate').val($.datepicker.formatDate(dateFormat, startDate, inst.settings));
            $('#endDate').val($.datepicker.formatDate(dateFormat, endDate, inst.settings));

            $('#btnSeleccionar').show();

            $('#week').val($.datepicker.formatDate(dateFormat, startDate, inst.settings) + "   a   " + $.datepicker.formatDate(dateFormat, endDate, inst.settings))

            fileDate = $.datepicker.formatDate(dateFormat, startDate, inst.settings) + " / " + $.datepicker.formatDate(dateFormat, endDate, inst.settings)
            //console.log(fileDate);

            week_start = $.datepicker.formatDate(dateFormat, startDate, inst.settings)
            week_end = $.datepicker.formatDate(dateFormat, endDate, inst.settings)


            if(reloadCounter>0){ table2.clear().destroy() }
         
            
            data = { "fecha_inicial": `${week_start}`, "fecha_final": `${week_end}` }
            axios({
                method: 'post',
                url: `/reporte_comedor`,
                data: JSON.stringify(data),
                headers: { 'content-type': 'application/json' }
            })
                .then((result) => {

                    reloadCounter++
                    let data=result.data
                    let temp=[]
                    let row=[]
                
                    data.forEach(r => {

                        temp.push(r.checador_id)
                        temp.push(r.checador_empleado)
                        

                        let date = new Date(r.checador_fecha)
       
                        date.setHours(date.getHours()-6);
                        var myDate_string = date.toISOString();
                        var myDate_string = myDate_string.replace("T"," ");
                        var myDate_string = myDate_string.substring(0, myDate_string.length - 5);
                        temp.push(myDate_string)

                        row.push(temp)
                        temp=[]
                    });
                    


                     table2 = $('#table2').DataTable({
                        //dom: "<'row'<'col-lg-4'l><'col-lg-4 text-center'B><'col-lg-4'f>><'row'<'col-lg-2't>><'row'<'col-lg-3'i><'col-lg-6'><'col-lg-3'p>>",
                     
                        data: row,
                        bInfo: false,
                        buttons: [
                            {
                                extend: 'excelHtml5',
                                title: null,
                                filename: `Comedor`,
                                className: "d-none"
            
                            }
            
                        ]
                    })


                })
                .catch((err) => { console.error(err) })
        }
    })
})