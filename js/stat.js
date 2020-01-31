'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_HEIGHT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var COLUMN_X = 130;
var COLUMN_Y = 250;
var COLUMN_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];

    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var randColor = function () {
    var b = Math.floor(Math.random() * (90 - 10) + 10);
    return 'hsl(240,' + b + '% ,' + b + '% )';
  };

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'hsl(0,0%,0%)';
    ctx.fillText(players[i], COLUMN_X + [i] * (BAR_WIDTH + COLUMN_GAP), COLUMN_Y);
    ctx.fillText(Math.floor(times[i]), COLUMN_X + [i] * (BAR_WIDTH + COLUMN_GAP), COLUMN_Y - TEXT_HEIGHT - FONT_GAP - ((BAR_HEIGHT - FONT_GAP) * times[i]) / maxTime);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randColor();
    }
    ctx.fillRect(COLUMN_X + [i] * (BAR_WIDTH + COLUMN_GAP), (COLUMN_Y - TEXT_HEIGHT) - ((BAR_HEIGHT - FONT_GAP) * times[i]) / maxTime, BAR_WIDTH, ((BAR_HEIGHT - FONT_GAP) * times[i]) / maxTime);
  }

};
