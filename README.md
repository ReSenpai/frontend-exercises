# NsSoft React тестовое задание

## Отправка готового решения

- Создайте локальный git-репозиторий с проектом и пришлите нам патч, содержащий ваши изменения

```
git init
git add -A && git commit -m "initial"
git checkout -b solution
git add -A && git commit -m "🎉 tada!"
git format-patch master --stdout > diff.patch
```

- Пожалуйста не выкладывайте файлы задания в публичные git-репозитории

## О тестовом задании

Этот проект взят не из реального мира однако он является упрощенной версией одного из наших проектов.
Пожалуйста, относитесь к нему как важному production-коду.

## Инструкции

Пожалуйста, внимательно прочитайте инструкции

### Основное

- Если вы видите, что хотели бы в будущем что-то добавить или улучшить в этом проекте, распишите, что именно и как бы вы сделали
- Не редактируйте никаких настроек сборки
- Мы не можем отвечать на ваши вопросы касательно сути тестового задания, поэтому принимайте решения так, как вам кажется будет лучше

### Задачи

- Исправьте баг в секции "Notes". Найдите почему добавление новой записи не всегда отображает ее в правильном месте.
- Используя redux saga сохраняйте данные "Notes" в localstorage
- Реализуйте секцию "Artworks" аналогичным образом как сделано в существующей секции "Artists". Массив данных расположен в `src/components/Pages/Artworks/index.js`. Избегайте копирования кода и следуйте best-практисам React-мира.
- Исправьте код секции "Artworks" так, чтобы при выборе работы не изменялся url-адрес. 



## Улучшения.

1. При отмене записи в Notes в массив все равно записывается значенеи null. Это можно и нужно поправить.

2. Типизация приложения исключила бы проблму с типами, как та из-за которой возник баг в секции "Notes" в редьюсере. 

3. Покрыть тестами бизнес логику, для улучшения отладки.

4. Обернуть компоненты контейнерными компонента, для улучшения чистоты компонент.

5. Переименовал бы константы для экшенов по redux ducks (как я сделал в своих примерах кода).

6. Прокидывал бы пропсы более точно, без лишних знаний для компоненты.

7. Переименовал бы все файлы в их фактические названия с перфиксами, а то куча index.js плодит путаницу :) Но это скорее уже вкусовщина.

8. Добавить кнопку очисти local Storage. Можно как доп задание сделать, поскольку сама собой напрашивается.

9. Добавить селекторы.

P.S. На саге писал первый раз, если не все гладно, прошу понять и простить.



## Фитбек

Задание классное, кретивно :) Предлагаю еще что нибудь сломать в проекте и добавить jest в сборку.

Спасибо за интересную задачку. Создатели молодцы !