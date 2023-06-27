// import { Client } from "pg";
// import { useEffect, useState } from "react";

const RecordsList = () => {
  // const [scores, setScores] = useState([]);
  // useEffect(() => {
      
  //   // Функция для получения данных из базы данных
  //   const fetchScoresFromDB = async () => {
  //     try {
  //       // Создаем экземпляр клиента PostgreSQL
  //       const client = new Client({
  //         user: 'admin', // Замените на свое имя пользователя
  //         host: 'snake', // Замените на свой хост
  //         database: 'snakeDB', // Замените на свою базу данных
  //         password: 'admin', // Замените на свой пароль
  //         port: 5432, // Порт по умолчанию для PostgreSQL
  //       });

  //       // Подключаемся к базе данных
  //       await client.connect();

  //       // Выполняем SQL-запрос для получения данных
  //       const query = 'SELECT name, score FROM scores ORDER BY score DESC';
  //       const response = await client.query(query);

  //       // Закрываем соединение с базой данных
  //       await client.end();

  //       // Получаем данные из результата запроса
  //       const data = response.rows;

  //       // Обновляем состояние с полученными данными
  //       setScores(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   // Вызываем функцию для получения данных из базы данных
  //   fetchScoresFromDB();
  // }, []);
  return (
    <>
      {/* <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.name}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
};

export default RecordsList;
