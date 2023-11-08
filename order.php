<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    $time = $data['time'];
    $vertical = $data['vertical'];
    $geo = $data['geo'];
    $language = $data['language'];
    $traff = $data['traff'];
    $size = $data['size'];
    $length = $data['length'];
    $thema = $data['thema'];
    $game = $data['game'];
    $os = $data['os'];
    $emotions = $data['emotions'];
    $banking = $data['banking'];
    $push_up = $data['push_up'];
    $app_name = $data['app_name'];
    $deadline = $data['deadline'];
    $offer = $data['offer'];
    $tg_username = $data['tg_username'];

    $token = "6693429161:AAFizCKyCS7peICWU0dTF643lTJznNmgEDM";
    $chat_id = "-4033461665";

    $arr = array(
        '⚡ Нове замовлення ⚡' => "",
        '🆔 ' => $id,
        '⏳ ' => $time,
        '🧔🏻 ' => '@' . $tg_username,
        '' => '',
        '👀 Деталі замовлення 👀' => '',
        'Вертикаль: ' => $vertical,
        'ГЕО: ' => $geo,
        'Мова: ' => $language,
        'Джерело трафіку: ' => $traff,
        'Розмір: ' => $size,
        'Довжина: ' => $length,
        'Тематика: ' => $thema,
        'Тип гри: ' => $game,
        'ОС: ' => $os,
        'Емоції виграшу: ' => $emotions,
        'Скрін банкінгу: ' => $banking,
        'Push-Up: ' => $push_up,
        'Назва пріли: ' => $app_name,
        'Термін виконання: ' => $deadline,
        'Посилання на оффер: ' => $offer,
        'Push-Up: ' => $push_up,

    );

    foreach ($arr as $key => $value) {
        $txt .= "<b>" . $key . "</b> " . $value . "%0A";
    }
    
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

    if ($sendToTelegram) {
        echo "Success";
    } else {
        http_response_code(404);
        echo "Error";
    }
}

?>