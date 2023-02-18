import { DataItem } from 'src/app/shared/interfaces/dataInterface';

export const getNoteIndexById = (data: DataItem[], id: number): number => {
  console.log(data.findIndex((elem) => elem.id === id));
  return data.findIndex((elem) => elem.id === id);
};
export const removeTag = (
  data: DataItem[],
  id: number,
  index: number
): DataItem[] => {
  const noteIndex = getNoteIndexById(data, id);
  if (noteIndex !== -1) {
    const updatedData = [...data];
    const updatedTags = [...updatedData[noteIndex].tags];
    updatedTags.splice(index, 1);
    updatedData[noteIndex] = { ...updatedData[noteIndex], tags: updatedTags };
    return updatedData;
  }
  return data;
};

export const addNewTag = (
  data: DataItem[],
  id: number,
  value?: string
): DataItem[] => {
  const noteIndex = getNoteIndexById(data, id);
  if (noteIndex !== -1) {
    const updatedData = [...data];
    const updatedTags = [...updatedData[noteIndex].tags, '#'];
    updatedData[noteIndex] = { ...updatedData[noteIndex], tags: updatedTags };
    return updatedData;
  }
  return data;
};

export const changeTitle = (
  data: DataItem[],
  id: number,
  value: string
): DataItem[] => {
  const noteIndex = getNoteIndexById(data, id);
  if (noteIndex !== -1) {
    const updatedNote = { ...data[noteIndex] };
    updatedNote.name = value;
    const updatedData = [...data];
    updatedData[noteIndex] = updatedNote;
    return updatedData;
  }
  return data;
};

export const changeTag = (
  data: DataItem[],
  id: number,
  value: string,
  index: number
): DataItem[] => {
  const noteIndex = getNoteIndexById(data, id);
  if (noteIndex !== -1) {
    const updatedData = [...data];
    const updatedTags = [...updatedData[noteIndex].tags];
    updatedTags[index] = value;
    updatedData[noteIndex] = { ...updatedData[noteIndex], tags: updatedTags };
    return updatedData;
  }
  return data;
};

export const addNote = (data: DataItem[], id: number, name: string) => {
  data.push({
    id,
    name,
    tags: [],
  });
  return data;
};

export const getNewId = (data: DataItem[]): number => {
  return (
    data.reduce((maxId, note) => {
      const currId = note.id;
      return currId > maxId ? currId : maxId;
    }, 0) + 1
  );
};
