$(function(){
    $.getJSON('js/seriea.json', function(data) {

            var color = "color";
            $('#seriea').append(
                '<table id="statsTable" class="table"><colgroup><col width="34"><col width=""><col width="50"><col width="45"><col width="45"><col width="45"><col width="40"><col width="45"><col width="50"></colgroup><thead><tr><td>&nbsp;</td><th data-type="string" class="alignLeft name headFaL borderR">Команда</th><th data-type="number" class="tabHead" title="Матчи">М</th><th data-type="number" class="tabHead" title="Выигрыши">В</th><th data-type="number" class="tabHead" title="Ничьи">Н</th><th data-type="number" class="tabHead" title="Проигрыши">П</th><th data-type="number" class="tabHead" title="Забитые голы">Заб</th><th data-type="number" class="tabHead" title="Пропущенные голы">Проп</th><th data-type="number" class="headFaL backgLast" title="Очки">О</th></th></thead><tbody id="stats"></tbody></table>');
            for (var i = 0; i < data.teams.length; i++){
                $('#stats').append(
                '<tr><td class="borderR ' + (data.teams[i].color ? color + data.teams[i].color : "") + '">' + data.teams[i].place + 
                '</td><td class="alignLeft borderR minWidth" ><div class="name"><i class="flag flag-ita" title="' + data.teams[i].flag_country + ' "></i><a class="name" href="' + data.teams[i].tag_url + '" title="' + data.teams[i].name + '">' + data.teams[i].name +
                '</a></div></td><td>' + data.teams[i].matches + 
                '</td><td>' + data.teams[i].win + 
                '</td><td>' + data.teams[i].draw + 
                '</td><td>' + data.teams[i].lose + 
                '</td><td>' + data.teams[i].goals + 
                '</td><td>' + data.teams[i].conceded_goals + 
                '</td><td class="backgLast">' + data.teams[i].score + 
                '</td></tr>');
            }
            $('#description').append('<b>М</b>&nbsp;–&nbsp;матчи, <b>В</b>&nbsp;–&nbsp;выигрыши, <b>Н</b>&nbsp;–&nbsp;ничьи, <b>П</b>&nbsp;–&nbsp;поражения, <b>Заб</b>&nbsp;–&nbsp;забитые голы, <b>Проп</b>&nbsp;–&nbsp;пропущенные голы, <b>О</b>&nbsp;–&nbsp;очки в турнире');
    });
});