import { type ChangeEvent, useRef, useState } from "react";
import { useAuth } from "@/hooks";
import { type FormData, useNewForm } from "./hooks/useNewForm";

import { Container, FieldInput, Button, FieldTextArea } from "@/components/ui";
import { PanelHeader } from "../components/panelHeader";

import { FiUpload, FiTrash } from "react-icons/fi";
import { v4 as uuidV4 } from "uuid";

import {
  onUploadImage,
  onDeleteImage,
  type ImageItemProps,
} from "@/services/storage";

import { CarService } from "@/services/repositories";

export default function New() {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, errors, reset } = useNewForm();

  const { user } = useAuth();

  const [carImages, setCarImages] = useState<ImageItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function onClickInputFile() {
    inputFileRef.current?.click();
  }

  async function handleUpload(image: File) {
    try {
      if (!user?.uid) {
        return;
      }

      const currentUserUid = user.uid;
      const uuidImage = uuidV4();
      const path = `images/${currentUserUid}/${uuidImage}`;

      const downloadUrl = await onUploadImage(image, path);

      const imageItem: ImageItemProps = {
        name: uuidImage,
        uid: currentUserUid,
        previewUrl: URL.createObjectURL(image),
        url: downloadUrl,
      };
      setCarImages((images) => [...images, imageItem]);
    } catch (error) {
      alert("Erro ao salvar imagem");
    }
  }

  async function handleDeleteImage(image: ImageItemProps) {
    try {
      const imagePath = `images/${image.uid}/${image.name}`;
      await onDeleteImage(imagePath);

      setCarImages((images) => images.filter((item) => item.url !== image.url));
    } catch (error) {
      alert("Não foi possível deletar a imagem");
    }
  }

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files && files.length > 0) {
      const image = files[0];

      if (["image/jpeg", "image/png"].includes(image.type)) {
        await handleUpload(image);
        return;
      }
      alert("Envie uma imagem jpeg ou png!");
      return;
    }
  }

  async function onSubmit(data: FormData) {
    try {
      if (carImages.length === 0) {
        alert("Envie alguma imagem deste carro!");
        return;
      }

      if (!user) {
        return;
      }

      setIsLoading(true);

      const carListImages = carImages.map((item) => {
        return {
          uid: item.uid,
          name: item.name,
          url: item.url,
        };
      });

      await CarService.create({
        ...data,
        created: new Date(),
        owner: user?.name as string,
        userUid: user?.uid as string,
        images: carListImages,
      });

      reset();
      setCarImages([]);
      alert("Carro cadastrado com sucesso!");
    } catch (error) {
      alert("Não foi possível cadastrar o carro! Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <PanelHeader />

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
        <button
          type="button"
          className="border-2 min-w-48 h-32 rounded-lg flex items-center justify-center cursor-pointer border-gray-200"
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
            onChange={handleFile}
          />
        </button>

        {carImages.map((item) => (
          <div
            key={item.name}
            className="flex-1 h-32 flex flex-row items-center justify-center relative"
          >
            <button
              type="button"
              className="absolute"
              onClick={() => handleDeleteImage(item)}
            >
              <FiTrash size={28} color="#fff" />
            </button>

            <img
              src={item.previewUrl}
              alt={item.name}
              className="rounded-lg w-full h-32 object-cover"
            />
          </div>
        ))}
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

          <Button type="submit" isLoading={isLoading}>
            Cadastrar
          </Button>
        </form>
      </div>
    </Container>
  );
}
