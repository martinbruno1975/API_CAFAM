const mongoose = require("../db/mongo.db").mongoose
const { Schema } = require('mongoose');

const PatentamientoSchema = new mongoose.Schema({
  id: {
    type: Schema.Types.String,
    required: true,
  },
  marca: {
    type: Schema.Types.String,
  },
  modelo: {
    type: Schema.Types.String,
  },
  Denomina: {
    type: Schema.Types.String,
  },
  RegistroNombre: {
    type: Schema.Types.String,
  },
  RegistroProvincia: {
    type: Schema.Types.String,
  },
  RegistroCP: {
    type: Schema.Types.String,
  },
  RegistroZona: {
    type: Schema.Types.String,
  },
  cilindrada: {
    type: Schema.Types.Number,
  },
  tipo: {
    type: Schema.Types.String,
  },
  categoria: {
    type: Schema.Types.String,
  },
  origen: {
    type: Schema.Types.String,
  },
  fecha_inscripcion: {
    type: Schema.Types.Date,
  },
  dominio: {
    type: Schema.Types.String,
  },
  motor: {
    type: Schema.Types.String,
  },
  nro_cuadro: {
    type: Schema.Types.String,
  },
  fecha_carga: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  periodo_inscripcion: {
    type: Schema.Types.Number,
    // eslint-disable-next-line func-names, object-shorthand
    default: function () {
      if (this.fecha_inscripcion) {
        return this.fecha_inscripcion.getFullYear();
      }
      return null;
    },
  },
  mes_inscripcion: {
    type: Schema.Types.Number,
    // eslint-disable-next-line func-names, object-shorthand
    default: function () {
      if (this.fecha_inscripcion) {
        return this.fecha_inscripcion.getUTCMonth() + 1;
      }
      return null;
    },
  },
});

PatentamientoSchema.methods.toJSON = function json() {
  const { __v, active, ...data } = this.toObject();
  return data;
};

PatentamientoSchema.index(
  { motor: 1, nro_cuadro: 1, dominio: 1 },
  { unique: true }
);

module.exports = mongoose.model('Patentamiento', PatentamientoSchema, 'pat_historico');