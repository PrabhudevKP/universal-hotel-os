import {resolveMockGuestSession} from "@/core/session/mock";
import {resolveHotel} from "@/core/tenant/registry";
import {notFound} from "next/navigation";

type GuestEntryProps={
  params:Promise<{token:string}>;
};

export default async function GuestEntry({params}:GuestEntryProps){
  const {token}=await params;
  const session=resolveMockGuestSession(token);

  if(!session) notFound();

  const hotel=session.hotel??await resolveHotel({token});

  return (
    <main className="guest-shell">
      <div className="guest-container qr-entry">
        <div className="qr-entry-mark">QR</div>
        <div className="eyebrow">SECURE ROOM ENTRY</div>
        <h1>{hotel.identity.displayName}</h1>
        <p className="muted">{hotel.identity.tagline}</p>

        <section className="card qr-session-card">
          <div className="qr-session-label">GUEST SESSION</div>
          <div className="qr-session-row">
            <span>Room</span>
            <strong>{session.roomNumber}</strong>
          </div>
          <div className="qr-session-row">
            <span>Guest</span>
            <strong>{session.guestName}</strong>
          </div>
          <div className="qr-session-row">
            <span>Status</span>
            <strong className="session-active">Active demo session</strong>
          </div>
        </section>

        <a className="btn btn-primary qr-continue" href={`/guest?token=${encodeURIComponent(token)}`}>
          Continue to guest portal
        </a>

        <p className="qr-helper">In production, this QR token will resolve the hotel, physical room and active guest stay from the secure session service.</p>
      </div>
    </main>
  );
}
