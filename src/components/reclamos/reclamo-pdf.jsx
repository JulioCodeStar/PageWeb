"use client";
import { format } from "date-fns";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 15,
    borderBottom: "1px solid #000",
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  field: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 10,
    color: "#666",
  },
  fieldValue: {
    fontSize: 12,
  },
  footer: {
    marginTop: 30,
    fontSize: 10,
    textAlign: "center",
    color: "#666",
  },
});

const ReclamoPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.title}>
        <Text>LIBRO DE RECLAMACIONES</Text>
        <Text style={{ fontSize: 12, marginTop: 5 }}>N°: {data.numero}</Text>
      </View>
      <Text style={{ fontSize: 10, textAlign: "center", marginBottom: 20 }}>
        Conforme a lo establecido en el Código de Protección y Defensa del
        Consumidor Ley N° 29571 y el Decreto Supremo N° 011-2011-PCM
      </Text>

      <View style={styles.subtitle}>
        <Text>1. IDENTIFICACIÓN DEL PROVEEDOR</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Razón Social:</Text>
        <Text style={styles.fieldValue}>{data.nombreProveedor}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>RUC:</Text>
        <Text style={styles.fieldValue}>{data.rucProveedor}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Dirección del Establecimiento:</Text>
        <Text style={styles.fieldValue}>{data.direccionProveedor}</Text>
      </View>

      <View style={styles.subtitle}>
        <Text>2. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Nombres y Apellidos:</Text>
        <Text style={styles.fieldValue}>
          {data.nombreConsumidor} {data.apellidoConsumidor}
        </Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Domicilio:</Text>
        <Text style={styles.fieldValue}>{data.domicilio}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>
          Distrito / Provincia / Departamento:
        </Text>
        <Text style={styles.fieldValue}>
          {data.distrito} / {data.provincia} / {data.departamento}
        </Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Documento de Identidad:</Text>
        <Text style={styles.fieldValue}>
          {data.tipoDocumento.toUpperCase()} - {data.documentoIdentidad}
        </Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Teléfono:</Text>
        <Text style={styles.fieldValue}>{data.telefono}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Correo Electrónico:</Text>
        <Text style={styles.fieldValue}>{data.email}</Text>
      </View>

      {data.menorEdad && (
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Padre o Apoderado:</Text>
          <Text style={styles.fieldValue}>{data.padreApoderado}</Text>
        </View>
      )}

      <View style={styles.subtitle}>
        <Text>3. IDENTIFICACIÓN DEL BIEN CONTRATADO</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Tipo:</Text>
        <Text style={styles.fieldValue}>
          {data.tipoReclamo === "reclamo"
            ? "Reclamo (Disconformidad relacionada a los productos o servicios)"
            : "Queja (Disconformidad no relacionada a los productos o servicios)"}
        </Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>
          Descripción del producto o servicio:
        </Text>
        <Text style={styles.fieldValue}>{data.bienContratado}</Text>
      </View>
      {data.monto && (
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Monto reclamado:</Text>
          <Text style={styles.fieldValue}>S/. {data.monto}</Text>
        </View>
      )}

      <View style={styles.subtitle}>
        <Text>4. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Detalle:</Text>
        <Text style={styles.fieldValue}>{data.detalleReclamo}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Pedido del Consumidor:</Text>
        <Text style={styles.fieldValue}>{data.pedidoConsumidor}</Text>
      </View>

      <View style={styles.subtitle}>
        <Text>5. ACCIONES ADOPTADAS POR EL PROVEEDOR</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldValue}>
          {data.accionesProveedor || "Pendiente de respuesta por el proveedor"}
        </Text>
      </View>

      <View style={styles.subtitle}>
        <Text>6. FECHA DEL RECLAMO</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldValue}>
          {format(data.fecha, "dd/MM/yyyy")}
        </Text>
      </View>

      <View style={styles.footer}>
        <Text>
          Libro de Reclamaciones conforme al Código de Protección y Defensa del
          Consumidor - Ley N° 29571 y el Decreto Supremo N° 011-2011-PCM
        </Text>
      </View>
    </Page>
  </Document>
);

export default ReclamoPDF;
