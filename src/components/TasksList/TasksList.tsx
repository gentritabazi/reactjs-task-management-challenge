import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { Grid, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const TasksList = () => {
  const { todos, deleteTodo } = useContext(MainContext)!;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const onClickDelete = (todoId: string) => {
    deleteTodo(todoId);
  };

  return (
    <div>
      {!todos.length && <div>No Tasks</div>}

      <Grid container spacing={2}>
        {todos.map((todo) => {
          return (
            <Grid item xs={6} key={todo.id}>
              <Item>
                {todo.title}
                <Box sx={{ mb: "20px" }} />
                <button>Edit</button> |
                <button onClick={() => onClickDelete(todo.id)}>Delete</button>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TasksList;
