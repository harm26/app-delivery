import React from "react";
import { useForm } from "react-hook-form";

const style = {
  container: {
    backgroundColor: "lightgrey",
    borderRadius: "4px",
  },
};

const FormContact = ({ getOrder, getAndSendData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div style={style.container}>
      <form onSubmit={handleSubmit(getOrder)} className="p-3">
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Nombre"
          {...register("name", { required: true })}
        />

        {errors.name && <span className="text-danger">Name is required</span>}

        <input
          className="form-control mt-2"
          type="text"
          placeholder="Apellido"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="text-danger">Last Name is required</span>
        )}

        <input
          className="form-control mt-2"
          type="text"
          placeholder="Dirección"
          {...register("direction", { required: true })}
        />
        {errors.direction && (
          <span className="text-danger">Direction is required</span>
        )}

        <input
          className="form-control mt-2"
          type="number"
          placeholder="Teléfono"
          {...register("telephone", { required: true })}
        />
        {errors.telephone && (
          <span className="text-danger">Telephone is required</span>
        )}

        <input
          className="form-control mt-2"
          type="email"
          placeholder="Correo electrónico"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="text-danger">Email is required</span>}

        <div>
          <button type="submit" className="btn btn-block btn-secondary mt-2">
            Realizar pedido
          </button>
        </div>
      </form>
      {getAndSendData.map((item) => JSON.stringify(item))}
    </div>
  );
};

export default FormContact;
