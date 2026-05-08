// Enumeración de géneros de películas
enum GeneroPelicula {
    ACCION = "Acción",
    COMEDIA = "Comedia",
    DRAMA = "Drama",
    TERROR = "Terror",
    CIENCIA_FICCION = "Ciencia Ficción",
    ROMANCE = "Romance",
    AVENTURA = "Aventura",
    FANTASIA = "Fantasía",
    ANIMACION = "Animación",
    DOCUMENTAL = "Documental"
}

// Enumeración de países productores de cine
enum PaisPelicula {
    USA = "Estados Unidos",
    MEXICO = "México",
    ARGENTINA = "Argentina",
    ESPAÑA = "España",
    FRANCIA = "Francia",
    REINO_UNIDO = "Reino Unido",
    JAPON = "Japón",
    COREA_DEL_SUR = "Corea del Sur",
    INDIA = "India"
}

// Mostrar todos los géneros
console.log("\n========================================");
console.log("     GÉNEROS DE PELÍCULAS");
console.log("========================================\n");

console.log("1. " + GeneroPelicula.ACCION);
console.log("2. " + GeneroPelicula.COMEDIA);
console.log("3. " + GeneroPelicula.DRAMA);
console.log("4. " + GeneroPelicula.TERROR);
console.log("5. " + GeneroPelicula.CIENCIA_FICCION);
console.log("6. " + GeneroPelicula.ROMANCE);
console.log("7. " + GeneroPelicula.AVENTURA);
console.log("8. " + GeneroPelicula.FANTASIA);
console.log("9. " + GeneroPelicula.ANIMACION);
console.log("10. " + GeneroPelicula.DOCUMENTAL);

// Mostrar todos los países
console.log("\n========================================");
console.log("     PAÍSES PRODUCTORES DE CINE");
console.log("========================================\n");

console.log("1. " + PaisPelicula.USA);
console.log("2. " + PaisPelicula.MEXICO);
console.log("3. " + PaisPelicula.ARGENTINA);
console.log("4. " + PaisPelicula.ESPAÑA);
console.log("5. " + PaisPelicula.FRANCIA);
console.log("6. " + PaisPelicula.REINO_UNIDO);
console.log("7. " + PaisPelicula.JAPON);
console.log("8. " + PaisPelicula.COREA_DEL_SUR);
console.log("9. " + PaisPelicula.INDIA);

// Mostrar películas famosas por país
console.log("\n========================================");
console.log("     PELÍCULAS FAMOSAS POR PAÍS");
console.log("========================================\n");

console.log("🏆 " + PaisPelicula.USA);
console.log("   - Titanic");
console.log("   - El Padrino");
console.log("   - Avatar");
console.log("   - Star Wars");
console.log("   - Jurassic Park\n");

console.log("🏆 " + PaisPelicula.MEXICO);
console.log("   - El Laberinto del Fauno");
console.log("   - Amores Perros");
console.log("   - Roma");
console.log("   - Y Tu Mamá También");
console.log("   - Cronos\n");

console.log("🏆 " + PaisPelicula.ARGENTINA);
console.log("   - El Secreto de Sus Ojos");
console.log("   - Nueve Reinas");
console.log("   - Relatos Salvajes");
console.log("   - La Historia Oficial");
console.log("   - El Clan\n");

console.log("🏆 " + PaisPelicula.ESPAÑA);
console.log("   - Volver");
console.log("   - Todo Sobre Mi Madre");
console.log("   - Los Otros");
console.log("   - Mar Adentro");
console.log("   - La Piel Que Habito\n");

console.log("🏆 " + PaisPelicula.FRANCIA);
console.log("   - Amélie");
console.log("   - Intocable");
console.log("   - La Haine");
console.log("   - El Pianista");
console.log("   - Azul y Blanco\n");

console.log("🏆 " + PaisPelicula.REINO_UNIDO);
console.log("   - Harry Potter");
console.log("   - James Bond");
console.log("   - El Discurso del Rey");
console.log("   - Slumdog Millionaire");
console.log("   - La Teoría del Todo\n");

console.log("🏆 " + PaisPelicula.JAPON);
console.log("   - El Viaje de Chihiro");
console.log("   - Siete Samuráis");
console.log("   - Your Name");
console.log("   - El Castillo Ambulante");
console.log("   - Perfect Blue\n");

console.log("🏆 " + PaisPelicula.COREA_DEL_SUR);
console.log("   - Parásitos");
console.log("   - Train to Busan");
console.log("   - Oldboy");
console.log("   - Memorias de un Asesino");
console.log("   - Decision to Leave\n");

console.log("🏆 " + PaisPelicula.INDIA);
console.log("   - 3 Idiots");
console.log("   - Dangal");
console.log("   - Lagaan");
console.log("   - RRR");
console.log("   - Baahubali\n");

console.log("========================================\n")