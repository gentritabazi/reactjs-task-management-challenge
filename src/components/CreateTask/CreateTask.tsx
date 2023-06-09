import { useState, FC, ChangeEvent } from "react";
import {
  FormControl,
  Button,
  TextField,
  Snackbar,
  TextareaAutosize,
  Select,
  Box,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Alert } from "@mui/material";

const CreateTask: FC<{
  addTodo: (text: string, description: string, status: string) => void;
}> = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setText(e.target.value);

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text, description, status);
    setText("");
    setDescription("");
    setStatus("");
    if (text.trim()) setOpen(true);
  };

  const onChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value as string);
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <FormControl fullWidth={true}>
          <TextField
            label="Title"
            variant="standard"
            onChange={handleChange}
            required={true}
            value={text}
          />

          <Box sx={{ mb: "20px" }} />

          <label>Description</label>
          <TextareaAutosize
            value={description}
            placeholder="Description"
            onChange={onChangeDescription}
          ></TextareaAutosize>

          <Box sx={{ mb: "20px" }} />

          <Select value={status} onChange={onChangeStatus}>
            <MenuItem value="toDo">To Do</MenuItem>
            <MenuItem value="inProgress">In Progress</MenuItem>
            <MenuItem value="inQA">In QA</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>

          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 5 }}
            type="submit"
          >
            Add
          </Button>
        </FormControl>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={() => setOpen(false)}
          severity="success"
        >
          Successfully added item!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CreateTask;
