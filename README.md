# Poloniex Quotes 📈

## О приложении

- Приложение отображает котировки с биржи Poloniex, обновляемые в реальном времени.

- Для загрузки данных и их кеширования используется библиотека Tanstack Query, для валидации - Zod.

- Посмотрел референсы (в основном, Apple Stocks), и решил вместо таблицы сделать карточки, т.к. они позволяют разместить данные более удобным образом на экране мобильного телефона, особенно, с учетом количества знаков после запятой.

- На экране «Котировки» данные обновляются каждые 5 секунд. На экране «О приложении» обновления котировок не происходит, что можно проследить по сообщениям 'fetching' в консоли, переключаясь между экранами.

- Для удобства тестирования на экране «Котировки» добавлены кнопки, фиксирующие состояние загрузки и/или ошибки, чтобы можно было посмотреть, как себя ведет приложение.

- Вместо спиннера сделал анимированные плейсхолдеры в процессе загрузки. Если нажать на Force loading, то анимация будет дергаться каждые 5 секунд из-за ререндера родительского компонента, но в реальном использовании это будет невозможно, т.к. данные либо еще загружаются, либо уже есть.

- Анимацию значений не делал, т.к. изменения не настолько частые и значительные, чтобы эта анимация была заметна.

## Сборка

Запуск приложения производится через Expo

```
npm i
npm start
```

Затем

```
i – для запуска симулятора iOS
a – для запуска эмулятора Android
```
