const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_api',
    port: 3307
  });

async function selectUsuarios(){
    const results = await connection.query("SELECT * FROM usuario");
    return results[0];
}

async function selectUsuario(id_usuario){
    const results = await connection.query("SELECT * FROM usuario WHERE id_usuario=?", [id_usuario]);
    return results[0];
}

async function insertUsuario(usuario){
    const values = [usuario.nome, usuario.telefone, usuario.cpf, usuario.email, usuario.senha];
    await connection.query("INSERT INTO usuario(nome, telefone, cpf, email, senha) VALUES (?,?,?,?,?)", values);
}

async function updateUsuario(id_usuario, usuario){
    const values = [usuario.nome, id_usuario];
    await connection.query("UPDATE usuario SET nome=? WHERE id_usuario=?", values);
}

 async function deleteUsuario(id_usuario){
    const values = [id_usuario];
    await connection.query("DELETE usuario WHERE id_usuario=?", values);
}

/* --------------------------------------------------------------------------------------------- */

async function selectBios(){
    const results = await connection.query("SELECT descricao FROM usuario");
    return results[0];
}

async function selectBio(id_usuario){
    const results = await connection.query("SELECT descricao FROM usuario WHERE id_usuario=?", [id_usuario]);
    return results[0];
}

async function updateBio(id_usuario, usuario){
    const values = [usuario.descricao, id_usuario];
    await connection.query("UPDATE usuario SET descricao=? WHERE id_usuario=?", values);
}

/* --------------------------------------------------------------------------------------------- */

async function selectLocais(){
    const results = await connection.query("SELECT nome_localidade FROM usuario");
    return results[0];
}

async function selectLocal(id_usuario){
    const results = await connection.query("SELECT nome_localidade FROM usuario WHERE id_usuario=?", [id_usuario]);
    return results[0];
}

async function updateLocal(id_usuario,usuario){
    const values = [usuario.nome_localidade, id_usuario];
    await connection.query("UPDATE usuario SET nome_localidade=? WHERE id_usuario=?", values);
}

/* --------------------------------------------------------------------------------------------- */

async function selectProffs(){
    const results = await connection.query("SELECT nome_profissao FROM usuario");
    return results[0];
}

async function selectProff(id_usuario){
    const results = await connection.query("SELECT nome_profissao FROM usuario WHERE id_usuario=?", [id_usuario]);
    return results[0];
}

async function updateProff(id_usuario,usuario){
    const values = [usuario.nome_profissao, id_usuario];
    await connection.query("UPDATE usuario SET nome_profissao=? WHERE id_usuario=?", values);
}




module.exports = {
    selectUsuarios,
    selectUsuario,
    insertUsuario,
    updateUsuario,
    deleteUsuario,
    selectBios,
    selectBio,
    updateBio,
    updateLocal,
    selectLocais,
    selectLocal,
    updateProff,
    selectProffs,
    selectProff
}





















