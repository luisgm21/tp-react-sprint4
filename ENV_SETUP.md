# Configuración de Variables de Entorno

## Estructura

El proyecto utiliza variables de entorno con Vite. Todas las variables deben comenzar con el prefijo `VITE_` para ser accesibles desde el código.

### Archivos

- **`.env.example`** - Plantilla con todas las variables necesarias (ir a Git)
- **`.env.local`** - Variables locales de desarrollo (ignorado por Git)
- **`.env.production`** - (Opcional) Variables para producción

## Variables Disponibles

| Variable | Uso | Valor por Defecto |
|----------|-----|------------------|
| `VITE_RICKANDMORTY_CHARACTERS_API_URL` | URL de la API de Rick and Morty | `https://rickandmortyapi.com/api/character` |
| `VITE_GITHUB_URL` | URL del perfil de GitHub | Tu URL de GitHub |
| `VITE_NODE_ENV` | Ambiente (development/production) | development |

## Uso Local

1. Copiar `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```

2. Editar `.env.local` con tus valores

3. Las variables están disponibles en el código vía:
```javascript
import { API_CONFIG } from './config/env'
// Usar: API_CONFIG.RICKANDMORTY_CHARACTERS_API_URL
```

## Configuración en Netlify

### Opción 1: Dashboard de Netlify

1. Ve a **Site Settings** → **Build & Deploy** → **Environment**
2. Haz clic en **Edit variables**
3. Agrega cada variable:
   - `VITE_RICKANDMORTY_CHARACTERS_API_URL`
   - `VITE_GITHUB_URL`
   - `VITE_NODE_ENV=production`
4. Guarda y redeploy

### Opción 2: Mediante netlify.toml (Recomendado)

Crea/actualiza `netlify.toml` en la raíz del proyecto:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production.environment]
  VITE_RICKANDMORTY_CHARACTERS_API_URL = "https://rickandmortyapi.com/api/character"
  VITE_GITHUB_URL = "https://github.com/luisgm21"
  VITE_NODE_ENV = "production"

[context.deploy-preview.environment]
  VITE_NODE_ENV = "staging"
```

### Opción 3: Variables Secretas (Si necesitas proteger datos sensibles)

```bash
netlify env:set VITE_API_KEY "tu-clave-secreta"
```

## Verificar Configuración

En el navegador, ve a la consola y verifica que se muestren las variables:

```javascript
// En dev tools console
console.log(import.meta.env.VITE_RICKANDMORTY_CHARACTERS_API_URL)
```

## Build & Deploy

### Desarrollo Local
```bash
npm run dev
```

### Build para Producción
```bash
npm run build
```

Las variables `.env.local` NO se incluyen en las builds, Netlify usará las variables que configuraste en el dashboard.

## Notas Importantes

✅ Commit `.env.example` - No sensible  
❌ NO commitear `.env.local` - Ya está en `.gitignore`  
✅ Configurar variables en Netlify dashboard  
✅ Las variables `VITE_*` se inyectan en tiempo de build  
