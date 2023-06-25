import { FieldSq } from "components/Field/Field.styled";

export const createField =( fieldSize,componentRefs) => {
      const { row, col } = fieldSize;
      const field = [];
      for (let i = 1; i <= row * col; i++) {
        field.push(
          <FieldSq
            id={i}
            key={i}
            ref={ref => (componentRefs.current[i] = ref)}
          ></FieldSq>
        );
      }
      return field;
};