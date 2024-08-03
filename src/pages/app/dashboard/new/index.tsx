import { useRef } from "react";
import { type FormData, useNewForm } from "./hooks/useNewForm";

import { Container, FieldInput, Button, FieldTextArea } from "@/components/ui";
import { PanelHeader } from "../components/panelHeader";

import { FiUpload } from "react-icons/fi";

export default function New() {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, errors, reset } = useNewForm();

  function onClickInputFile() {
    inputFileRef.current?.click();
  }

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <PanelHeader />

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
        <button
          type="button"
          className="border-2 w-48 h-32 rounded-lg flex items-center justify-center cursor-pointer border-gray-200"
          onClick={onClickInputFile}
        >
          <div>
            <FiUpload size={30} color="#000" />
          </div>

          <input
            type="file"
            accept="image/*"
            style={{ width: 1, height: 1 }}
            ref={inputFileRef}
          />
        </button>
      </div>

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FieldInput
            label="Nome do carro"
            id="name"
            name="name"
            placeholder="Ex: Onix 1.0..."
            register={register}
            error={errors.name?.message}
          />

          <FieldInput
            label="Modelo"
            id="model"
            name="model"
            placeholder="Ex: 1.0 Flex Plus Manual..."
            register={register}
            error={errors.model?.message}
          />

          <div className="w-full flex flex-row items-center gap-4">
            <FieldInput
              label="Ano"
              id="year"
              name="year"
              placeholder="Ex: 2016"
              register={register}
              error={errors.year?.message}
              type="number"
            />

            <FieldInput
              type="number"
              step={1}
              label="Km rodados"
              id="km"
              name="km"
              placeholder="Ex: 23.900..."
              register={register}
              error={errors.km?.message}
            />
          </div>

          <div className="w-full flex flex-row items-center gap-4">
            <FieldInput
              label="Telefone para contato"
              id="phone"
              name="phone"
              placeholder="Ex: 079999999999"
              register={register}
              error={errors.phone?.message}
            />

            <FieldInput
              label="Cidade"
              id="city"
              name="city"
              placeholder="Ex: Aracaju"
              register={register}
              error={errors.city?.message}
            />
          </div>

          <FieldInput
            label="Preço"
            id="price"
            name="price"
            placeholder="Ex: 69.000"
            register={register}
            error={errors.price?.message}
            type="number"
          />

          <FieldTextArea
            label="Descrição"
            placeholder="Descrição do veículo"
            register={register}
            name="description"
            error={errors.description?.message}
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </Container>
  );
}
