import { Injectable, signal } from '@angular/core';
import { createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  url: string = 'https://gnjihwicoebziqflgyfv.supabase.co';
  key: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imduamlod2ljb2ViemlxZmxneWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzYwNjAsImV4cCI6MjA3MjUxMjA2MH0.bCye1pJSlx7ZrpqdxNd7gj4E6iv5p-vzLHO9Gm4FYhE';

  supabase: SupabaseClient<any, "public", "public", any, any>;

  // HAY QUE HACERLO DE TIPO SIGNAL, PARA QUE SE ACTUALIZE EN TIEMPO REAL
  // public usuarioActual: User | null = null;
  public usuarioActual = signal<User | null>(null);

  constructor() {
    this.supabase = createClient(this.url, this.key);

    // CUANDO CAMBIA EL ESTADO DEL AUTH (internamente es un observable)
    this.supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      console.log(session);
      this.usuarioActual.set(session ? session.user : null);
    });
  }

  async iniciarSesion(email: string, password: string) {
    const respuesta = await this.supabase.auth.signInWithPassword({ email: email, password: password });
  }

  async crearCuenta(email: string, password: string) {
    console.log(email, ' ', password);
    const respuesta = await this.supabase.auth.signUp({ email: email, password: password });
    console.log(respuesta);
  }

  cerrarSesion() {
    this.supabase.auth.signOut();
  }
}
