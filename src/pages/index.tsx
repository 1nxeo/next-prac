import { useRouter } from "next/router";
import React, { useState } from "react";
import { styled } from "styled-components";

interface Todo {
  id: number;
  title: string;
  desc: string;
}

const App = () => {
  const router = useRouter();
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    title: "",
    desc: "",
  });

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList([...todoList, { ...todo, id: todo.id + 1 }]);
    setTodo({ id: todo.id + 1, title: "", desc: "" });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          제목
          <input
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </label>
        <label>
          내용
          <input
            value={todo.desc}
            onChange={(e) => setTodo({ ...todo, desc: e.target.value })}
          />
        </label>
        <button>작성하기</button>
      </form>
      <StCardWrapper>
        {todoList.map((item) => (
          <StCard
            key={item.id}
            style={{ display: "flex", gap: "30px" }}
            onClick={() => router.push(`/detail/${item.id}`)}
          >
            <p>제목 {item.title}</p>
            <p>내용 {item.desc}</p>
          </StCard>
        ))}
      </StCardWrapper>
    </>
  );
};

export default App;

const StCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StCard = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
